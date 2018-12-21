import React from 'react';
import "./ClickGame.css";
import bacons from '../../bacons.json';
import Scorecard from '../Scorecard/Scorecard';
import Image from '../Image/Image';

class ClickGame extends React.Component {
    state = {
        gameOver: true,
        score: 0,
        topScore: 0,
        bacons,
        guessed: []
    }

    shuffle = (arr) => {
        return arr.sort(() => Math.random() - 0.5);
    }

    makeGuess = (id) => {
        // if id in guessed array
        if (this.state.guessed.includes(id)) {
            // end game
            console.log(`game over`);
            this.setState({ score: 0, guessed: [] })
        } else {
            // increment score
            if (this.state.score >= this.state.topScore) {
                this.setState({
                    score: this.state.score + 1,
                    topScore: this.state.score + 1
                });
            }
            else {
                this.setState({
                    score: this.state.score + 1
                })
            }

            // push id to guessed array
            this.state.guessed.push(id);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Scorecard score={this.state.score} topScore={this.state.topScore} />
                <div className="row no-gutters">
                    {this.shuffle(bacons).map(bacon =>
                        <Image
                            makeGuess={this.makeGuess}
                            id={bacon.id}
                            image={bacon.image}
                        />
                    )}
                </div>
                <div class="fixed-bottom-offset"></div>
            </div>
        )
    }
}

export default ClickGame;