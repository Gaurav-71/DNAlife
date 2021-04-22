import React, { useEffect, useRef } from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  function lerp({ x, y }, { x: targetX, y: targetY }) {
    const fraction = 0.1;

    x += (targetX - x) * fraction;
    y += (targetY - y) * fraction;

    return { x, y };
  }

  class Slider {
    constructor(el) {
      const activeImgClass = "slider__images-item--active";
      const activeTextClass = "slider__text-item--active";

      this.el = el;
      this.contentEl = document.getElementById("slider-content");
      this.onMouseMove = this.onMouseMove.bind(this);

      this.el.onMouseMove = () => {
        console.log("hello");
      };

      // taking advantage of the live nature of 'getElement...' methods
      this.activeImg = el.getElementsByClassName(activeImgClass);
      this.activeText = el.getElementsByClassName(activeTextClass);
      this.images = el.getElementsByTagName("img");

      window.addEventListener("resize", this.onResize.bind(this));

      this.onResize();

      this.length = this.images.length;
      this.lastX = this.lastY = this.targetX = this.targetY = 0;
    }
    onResize() {
      const htmlStyles = getComputedStyle(document.documentElement);
      const mobileBreakpoint = htmlStyles.getPropertyValue("--mobile-bkp");

      const isMobile = (this.isMobile = matchMedia(
        `only screen and (max-width: ${mobileBreakpoint})`
      ).matches);

      this.halfWidth = window.innerWidth / 2;
      this.halfHeight = window.innerHeight / 2;
      this.zDistance = htmlStyles.getPropertyValue("--z-distance");

      if (!isMobile && !this.mouseWatched) {
        this.mouseWatched = true;
        this.el.addEventListener("mousemove", this.onMouseMove);
        this.contentEl.style.setProperty(
          "transform",
          `translateZ(${this.zDistance})`
        );
      } else if (isMobile && this.mouseWatched) {
        this.mouseWatched = false;
        this.el.removeEventListener("mousemove", this.onMouseMove);
        this.contentEl.style.setProperty("transform", "none");
      }
    }
    getMouseCoefficients({ pageX, pageY } = {}) {
      const halfWidth = this.halfWidth;
      const halfHeight = this.halfHeight;
      const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
      const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;

      return { xCoeff, yCoeff };
    }
    onMouseMove({ pageX, pageY }) {
      this.targetX = pageX;
      this.targetY = pageY;

      if (!this.animationRunning) {
        this.animationRunning = true;
        this.runAnimation();
      }
    }
    runAnimation() {
      if (this.animationStopped) {
        this.animationRunning = false;
        return;
      }

      const maxX = 10;
      const maxY = 10;

      const newPos = lerp(
        {
          x: this.lastX,
          y: this.lastY,
        },
        {
          x: this.targetX,
          y: this.targetY,
        }
      );

      const { xCoeff, yCoeff } = this.getMouseCoefficients({
        pageX: newPos.x,
        pageY: newPos.y,
      });

      this.lastX = newPos.x;
      this.lastY = newPos.y;

      this.positionImage({ xCoeff, yCoeff });

      this.contentEl.style.setProperty(
        "transform",
        `
        translateZ(${this.zDistance})
        rotateX(${maxY * yCoeff}deg)
        rotateY(${maxX * xCoeff}deg)
      `
      );

      if (this.reachedFinalPoint) {
        this.animationRunning = false;
      } else {
        requestAnimationFrame(this.runAnimation.bind(this));
      }
    }
    get reachedFinalPoint() {
      const lastX = ~~this.lastX;
      const lastY = ~~this.lastY;
      const targetX = this.targetX;
      const targetY = this.targetY;

      return (
        (lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) &&
        (lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY)
      );
    }
    positionImage({ xCoeff, yCoeff }) {
      const maxImgOffset = 1;
      const currentImage = this.activeImg[0].children[0];

      currentImage.style.setProperty(
        "transform",
        `
        translateX(${maxImgOffset * -xCoeff}em)
        translateY(${maxImgOffset * yCoeff}em)
      `
      );
    }

    startTransition(nextId) {
      function onTextTransitionEnd(e) {
        if (!e.pseudoElement) {
          e.stopPropagation();

          requestAnimationFrame(() => {
            self.transitionItem(nextId);
          });

          this.removeEventListener("transitionend", onTextTransitionEnd);
        }
      }

      if (this.inTransit) return;

      const activeText = this.activeText[0];
      const backwardsClass = `${this.TEXT_CLASS}--backwards`;
      const self = this;

      this.inTransit = true;

      activeText.classList.add(backwardsClass);
      activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
      activeText.addEventListener("transitionend", onTextTransitionEnd);

      requestAnimationFrame(() => {
        activeText.classList.remove(backwardsClass);
      });
    }
  }

  useEffect(() => {
    const sliderEl = document.getElementById("slider");
    console.log(sliderEl);
    const slider = new Slider(sliderEl);
  }, []);

  const sliderDiv = useRef();

  return (
    <div className="slider" id="slider">
      <div className="slider__content" id="slider-content">
        <div className="slider__images">
          <div className="slider__images-item--active">
            <img
              src="https://lh3.googleusercontent.com/aC9nyW5dhaYFmWD8fcf8DApjpH08eHEkbCHqmUPHRQ5T3jK-QyNKZYVMehmrvyPdEA_KxWvgZ3_kyOOYOAv99Ow3UoKSvEloleVKGSfLOwOyDV3Q6Dwi1G-NYoa9-t_ofmmskE6BYnVIOnIz2HWlMcijzIEwvKAL_R4z63DaLgG0z_OcGiSQHunwGAPXrBQUv42ZXuIMODq4zxDHczSxJ72b0-_udtdQK3JuT2X8nXCwFoF7GxmOpzXS0H5f50DuCbXoXcx-O7bgBMCXZdMpTxB27-wdXeLmxpYUySXgjSN2NAKmK16DmGLYvw5tMlrqwb8h4MJEEbXjP1pjPxXsahb7UZseEGyn80uLjATANJvusyJWCtzkkxYXPz-yI1rDvfEJKe2eyA-5AvFlzFBSwBMASn8f7mXinUrXMMREkJQjoi89NfZ91G7253OEVQOqcWxddiYtcHCO5v6Pl3QfV2SUTWXgggscDSY2ezjSPpYERNTXnIM_aCyWmIG7ybrfqOB0eVYBAgynyuPVbjd4KuZWZq2Dfu33HX1RuPKglbOuZGD1QbpJnruvUVkAmjDXI40ENN7X=w1600-h766"
              alt=""
            />
          </div>
        </div>
        <div className="slider__text">
          <div className="slider__text-item slider__text-item--active">
            <div className="slider__text-item slider__text-item-head">
              <h3>About Us</h3>
            </div>
            <div className="slider__text-item-info">
              <p>
                “And into the forest I go, to lose my mind and find my soul”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
