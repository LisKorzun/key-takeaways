import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Icon } from '../Icon';

const SNav = styled.nav`
  margin: 20px auto;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  #toggle {
    display: none; //hides the checkbox
  }
  #toggle:checked {
    //Any element you need to change the style if menu is open goes here, using the sibling selector (~)
    & ~ .toggle-container .button-toggle {
      box-shadow: 0 0 0 550px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);

      &:before {
        transform: translateY(-50%) rotate(45deg) scale(1);
      }

      &:after {
        transform: translateY(-50%) rotate(-45deg) scale(1);
      }
    }
    // Open Nav
    & ~ .nav {
      margin-bottom: 100px;
      pointer-events: auto;
      transform: translate(50px, 50px);

      // Restoring nav items from 'lines' in the menu icon
      .nav-item {
        color: #ec7263;
        letter-spacing: 0;
        height: 40px;
        line-height: 40px;
        margin-top: 0;
        opacity: 1;
        transform: scaleY(1);
        transition: 0.5s, opacity 0.1s;

        // Setting delays for the nav items in open transition
        //@for $i from 1 through $items {
        //  &:nth-child(#{$i}) {
        //    $delay: ($items - $i) * $transition-delay;
        //    transition-delay: $delay;
        //    &:before {
        //      transition-delay: $delay;
        //    }
        //  }
        //}

        // Hide the lines
        &:before {
          opacity: 0;
        }
      }
    }
    & ~ .dummy-content {
      padding-top: 30px;

      &:before {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  .button-toggle {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 100%;
    transition: 0.5s + 0.1;

    // Shadow on Hover
    &:hover {
      box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1), inset 0 0 0 20px rgba(0, 0, 0, 0.1);
    }
    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ec7263;
      border-radius: 5px;
      transition: 0.5s;
    }

    &:before {
      transform: translateY(-50%) rotate(45deg) scale(0);
    }

    &:after {
      transform: translateY(50%) rotate(-45deg) scale(0);
    }
  }

  /* Menu */

  .nav {
    display: inline-block;
    margin: 25px 25px 20px;
    pointer-events: none;
    transition: 0.5s;
  }
  .nav-item {
    position: relative;
    display: inline-block;
    float: left;
    clear: both;
    color: transparent;
    font-size: 14px;
    letter-spacing: -6.2px;
    height: 7px;
    line-height: 7px;
    text-transform: uppercase;
    white-space: nowrap;
    transform: scaleY(0.2);
    transition: $transition-duration, opacity 1s;

    //Set delays for the nav items in close transition
    @for $i from 1 through $items {
      &:nth-child(#{$i}) {
        $delay: ($i - 1) * $transition-delay;
        transition-delay: $delay;
        &:before {
          transition-delay: $delay;
        }
      }
    }

    // Adjusting width for first line
    &:nth-child(1) {
      letter-spacing: -8px;
    }

    // Adjusting width for second line
    &:nth-child(2) {
      letter-spacing: -7px;
    }

    // Adjusting the fourth element onwards
    &:nth-child(n + 4) {
      letter-spacing: -8px;
      margin-top: -7px;
      opacity: 0;
    }

    //getting lines for the hamburger menu icon
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ec7263;
      transform: translateY(-50%) scaleY(5);
      transition: $transition-duration;
    }
  }
`;

const NavLink = styled((props) => <Link {...props} />)`
  //position: relative;
  //padding: 10px 0;
  //color: ${(props) => props.theme.background};
  //&:after {
  //  content: '';
  //  position: absolute;
  //  height: 2px;
  //  bottom: 5px;
  //  left: -2px;
  //  right: 0;
  //  background-color: ${(props) => props.theme.primary};
  //  visibility: hidden;
  //  -webkit-transform: scaleX(0);
  //  -moz-transform: scaleX(0);
  //  -ms-transform: scaleX(0);
  //  -o-transform: scaleX(0);
  //  transform: scaleX(0);
  //  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  //  -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  //  -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  //  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  //}
  //&:hover {
  //  color: ${(props) => props.theme.primary};
  //  opacity: 1;
  //  &:after {
  //    visibility: visible;
  //    -webkit-transform: scaleX(1);
  //    -moz-transform: scaleX(1);
  //    -o-transform: scaleX(1);
  //    transform: scaleX(1);
  //  }
  //}
`;

export const Menu: FC = () => {
  return (
    <SNav>
      <input id="toggle" type="checkbox" />
      <label className="toggle-container" htmlFor="toggle">
        <span className="button button-toggle"></span>
      </label>
      <div className="nav">
        <NavLink className="nav-item" to="/levels">
          <Icon name="levels" height="30px" color="background" />
        </NavLink>
        <NavLink className="nav-item" to="/topics">
          <Icon name="topics" height="30px" color="background" />
        </NavLink>
        <NavLink className="nav-item" to="/tags">
          <Icon name="tag" height="30px" color="background" />
        </NavLink>
        <NavLink className="nav-item" to="/about">
          <Icon name="about" height="30px" color="background" />
        </NavLink>
      </div>
    </SNav>
  );
};
