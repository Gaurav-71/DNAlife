import React, { useEffect, useRef } from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  function lerp({ x, y }, { x: targetX, y: targetY }) {
    const fraction = 0.1;

    x += (targetX - x) * fraction;
    y += (targetY - y) * fraction;

    return { x, y };
  }

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
            <div className="slider__text-item-info">
              <p>
                Given the burgeoning human population in India in particular and
                world in general, many decisions taken in the ‘interest of
                society’, invariably spell doom to the natural wealth of the
                land, with green-cover rapidly cleared to make room for an ever
                expanding human society. This is destined to backfire, for the
                very foundation of healthy life is based, among other things, on
                a clean environment, abundant rainfall, fertile soil and pure
                water. It is therefore the need-of-the-hour, even in the
                interest of human society, to generate a greater respect for
                nature and to check over-exploitation of natural resources. More
                important, however, is for us to recognize the right for all
                life forms to exist independent of human whims and fancies, a
                right that is rarely ever acknowledged. Fruition of each of
                these goals is a long way off, but every step taken with this
                intention is a step taken in the right direction.
              </p>
              <p>
                BCRT attempts, in its own modest way, to correct for this
                appalling imbalance and change the way we view nature.
                Conservation practices are adopted both actively and passively.
                Based primarily in Anuganalu, a village in Karnataka, India (at
                the foot of the verdant Western Ghats), BCRT has established a
                nursery that grows local and forest plant species. Being native
                to the region, local flora require little or no attention but
                benefit the farmer immensely by enriching soil fertility,
                recharging ground water and preventing soil erosion. BCRT
                encourages farmers to grow these in addition to their own crops,
                and has already distributed hundreds of thousands of saplings to
                farmers. A vast, deep pond, silted over the years, is being
                de-silted for creating a lake that would not only enhance the
                local bio-diversity by supporting local flora and fauna,
                particularly as a bird-habitat, but would also benefit the
                denizens of the village by recharging ground water. Human
                activities were minimized around a barren stretch of rocky land,
                about 15 acres, which belongs to Anuganalu. The result was
                evident within three years when a slow regeneration of the
                forest that once, not so long ago, stretched up to the village
                was noticed. This area is now completely green thanks to
                additional efforts from BCRT to afforest it.
              </p>
              <p>
                Medicinal plants are grown here in order to preserve indigenous
                knowledge in medicine. BCRT conducts workshops to sensitize
                villagers to the importance of natural wealth and the direct
                influence it has on the quality of their lives. Organic farming,
                soil and water conservation methods have been implemented in and
                around Anuganalu. BCRT also works with central and state
                government institutions like Karnataka Biodiversity Board,
                Forest Department, Jalanayana and Department of Agriculture. It
                is currently working to protect bio-diversity in a hill close to
                the village by establishing a wildlife sanctuary.
              </p>
              <p>
                The ultimate objective of BCRT, in addition to conservation and
                documentation, is to support and conduct research in plant
                biology particularly by involving farmers right from the
                beginning. This involvement of end-users (farmers) serves as a
                tool to preserve and protect the indigenous vegetation.
              </p>
              <p>
                The activities of BCRT have proved to be nothing short of
                inspirational to the people whose lives it has touched. Several
                have returned with the intention of establishing a similar
                system in their own villages. The government and the forest
                department have always backed its activities as BCRT looks
                forward to a steady growth in this goodwill and camaraderie.
              </p>
              <p>
                While you are here, we would urge you to read the history behind
                our organization and browse through the projects we have handled
                over the last five years of our existence. We welcome your
                feedback and look forward to your participation!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
