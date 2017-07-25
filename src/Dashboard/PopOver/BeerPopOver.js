import React, { Component } from 'react';
import $                    from 'jquery';
import { ProgressBar, Popover, OverlayTrigger, popoverFocus } from 'react-bootstrap';

import './BeerPopOver.css';

class BeerPopOver extends Component {


  render() {
    const maxAbv = 12;
    const maxIbu = 100;
    const maxGravity = 1.2;
    const minGravity = .08;
    const srmMax = 40;

    const popoverHoverFocusABV = (
      <Popover id="popover-trigger-hover-focus" title="What does ABV mean?">
        <strong>ABV: Alcohol By Volume</strong> Unlike hard liquor, beers aren't measured by proof, but most commonly by ABV— alcohol by volume. This number simply lets you know what percentage of your beer is alcohol.
      </Popover>
    );

    const popoverHoverFocusIBU = (
      <Popover id="popover-trigger-hover-focus" title="What does IBU mean?">
        <strong>IBU: International Bitterness Units</strong> International Bitterness Units measure hop bitterness on a scale from 0 to 100. Though extra-hopped IPAs can reach into the 70s, Mosher notes that the bitterness you perceive as a drinker depends on the balance between hops and malts in the finished product.
      </Popover>
    );

    const popoverHoverFocusGravity = (
      <Popover id="popover-trigger-hover-focus" title="What does Gravity mean?">
        <strong>Gravity</strong> A gravity reading refers to the total amount of dissolved solids in water, since we’re talking about beer, those dissolved solids are sugars. These sugars are consumed by yeast to convert the wort (unfermented ingredients) into beer. It’s read as a sequence of numbers that starts with the number one followed by a decimal to the thousandth place, something like this: 1.052.
      </Popover>
    );

    const popoverHoverFocusSRM = (
      <Popover id="popover-trigger-hover-focus" title="What does SRM mean?">
        <strong>SRM: Standard Reference Method</strong> Possibly the most confusing designation, Standard Reference Method measures the color of the beer in your glass—the higher the number, the darker the beer. But color does not necessarily equal flavor. While it's easy to make overarching judgments and think that pale gold beers are light in flavor, amber beers are sweet and malty, and near-black beers are super roasty, exceptions abound—like black kölsch!
      </Popover>
    );

    return (
      <div className="beer-info">
        <div className="beer-card-header">
          <p className="beer-name"><strong>{this.props.displayName}</strong></p>
          <p className="beer-type"><i>({this.props.beerStyle})</i></p>
          <img className="beer-label" src={this.props.beerImg} alt="..." />
        </div>

        <div className="beer-stats">
          <div className='beer-stats-inner'>
            <div className='beer-single-stat-left'>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocusABV}>
                <p className="beer-stat-header"><strong>ABV</strong></p>
              </OverlayTrigger>
              <ProgressBar max={maxAbv} now={this.props.beerAbv} label={`${this.props.beerAbv}%`} />
              <div className="prog-labels">
                <p className="left-prog-label">Low</p>
                <p className="right-prog-label">High</p>
              </div>
            </div>
            <div className='beer-single-stat-right'>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocusIBU}>
                <p className="beer-stat-header"><strong>IBU</strong></p>
              </OverlayTrigger>
              <ProgressBar
                max={maxIbu} n
                now={this.props.ibu
                      ? this.props.ibu
                      : 100}
                label={this.props.ibu
                            ? this.props.ibu
                            : 'N/A'}/>
              <div className="prog-labels">
                <p className="left-prog-label">Smooth</p>
                <p className="right-prog-label">Bitter</p>
              </div>
            </div>
          </div>
          <div className="beer-stats-inner">
            <div className='beer-single-stat-left'>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocusGravity}>
                <p className="beer-stat-header"><strong>Gravity</strong></p>
              </OverlayTrigger>
              <ProgressBar min= {minGravity} max={maxGravity} now={this.props.gravity} label={this.props.gravity} />
              <div className="prog-labels">
                <p className="left-prog-label">Low</p>
                <p className="right-prog-label">High</p>
              </div>
            </div>
            <div className='beer-single-stat-right'>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocusSRM}>
                <p className="beer-stat-header"><strong>SRM</strong></p>
              </OverlayTrigger>
              <ProgressBar max={srmMax} now={this.props.srmMax} label={this.props.srmMax} />
              <div className="prog-labels">
                <p className="left-prog-label">Light</p>
                <p className="right-prog-label">Dark</p>
              </div>
            </div>
          </div>
        </div>
          <div>
            <p className=''><strong>Description</strong></p>
            <p className='beer-desc'>{this.props.beerDesc}</p>
          </div>
      </div>
    );
  }
}

export default BeerPopOver;