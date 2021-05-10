<template>
  <div class="">
    <div class="headSection">
      <div class="headBack">
        <div class="flexCenter title">
          <img src="../img/sdgsGoals/sdg-header-en.png" style="height: 50px" />
        </div>
        <div id="sdgInfoContainer" class="contentContainer padding_480 " style="">
          <h1 style="">SDGs</h1>
          <h2 id="sdgInfo">
            The Sustainable Development Goals (SDGs) were born at the United
            Nations Conference on Sustainable Development in Rio de Janeiro in
            2012. The objective was to produce a set of universal goals that
            meet the urgent environmental, political and economic challenges
            facing our world.
          </h2>
        </div>
      </div>
    </div>
    <div class="bodySection">
      <div id="firstSection">
        <div class="briefBlock contentContainer">
          <div class="titleSection briefTitle flexCol flexJustAround" style="">
            <h1>TOTALY <span class="textStress blueFull">17</span> GOALS</h1>
            <div class="smallTitle flexJustBetween">
              <h2>
                <span class="blueFont">169</span>
                <h3>Targets</h3>
              </h2>
              <h2>
                <span class="blueFont">3036</span>
                <h3>Events</h3>
              </h2>
              <h2>
                <span class="blueFont">1257</span>
                <h3>Publications</h3>
              </h2>
              <h2>
                <span class="blueFont">5414</span>
                <h3>Actions</h3>
              </h2>
            </div>
          </div>
          <div class="phoneBriefTitle">
            <h1 class="textCenter">TOTALY</h1>
            <h1 class="textCenter"><span class="textStress blueFull">17</span> GOALS</h1>
            <div class="flexJustAround flexWrap">
              <h2 class="w50 textCenter">
                <span class="blueFont">169</span>
                <h3>Targets</h3>
              </h2>
              <h2 class="w50 textCenter">
                <span class="blueFont">3036</span>
                <h3>Events</h3>
              </h2>
              <h2 class="w50 textCenter">
                <span class="blueFont">1257</span>
                <h3>Publications</h3>
              </h2>
              <h2 class="w50 textCenter">
                <span class="blueFont">5414</span>
                <h3>Actions</h3>
              </h2>
            </div>
          </div>
        </div>
        <div class="blueBlock w80" style="height: 511px"></div>
        <div
          id="acryBlock"
          class="acryMask"
          style="height: 101px; margin-left: 80px; bottom: -75px"
        ></div>
      </div>
      <div id="secondSection" style="">
        <div class="contentContainer" style="background: #ffffff">
          <div class="flexJustStart flexAlignCenter flexWrap">
            <div
              class="contentCard res_w20 flexJustEnd flexCol"
              v-for="(target, index) in sdgTargets"
              :key="index"
              :style="'background-image:url(' + target.back + ')'"
            >
              <div class="cardMask" :style="'background-color:' + target.color ">
                <div class="padding_20">
                  <h3 class="goal-title">Goal {{ index + 1 }}</h3>
                  <p class="goal-text">
                    {{target.info}}
                  </p>
                  <div class="gridCol_2 gridRow_2">
                    <div class="col-6">
                      <h3>7</h3>
                      <p class="feature">Targets</p>
                    </div>
                    <div class="col-6">
                      <h3>30</h3>
                      <p class="feature">Events</p>
                    </div>
                    <div class="col-6">
                      <h3>19</h3>
                      <p class="feature">Publications</p>
                    </div>
                    <div class="col-6">
                      <h3>835</h3>
                      <p class="feature">Actions</p>
                    </div>
                  </div>
                  <button
                    class="wzhButton trans light lineButton flexCol flexCenter marginCenter"
                  >
                    MORE INFO
                    <div class="hoverLine"></div>
                  </button>
                </div>
              </div>
              <img class="bottomImg" :src="target.s_img" />
            </div>
          </div>
        </div>
      </div>
      <div id="thirdSection" style="">
        <div
          class="fullContainer"
          style="background: #e2f8ffb5; backdrop-filter: blur(3px)"
        >
          <div class="contentContainer">
            <div class="achieveBlock flexJustStart flexAlignCenter flexWrap padding_40">
              <h2 class="">What ACHIEVEMENTS we have got?</h2>
              <ul class="displayLiDisc">
                <li>
                  <p class="text18">
                    More than 1 billion people have been lifted out of extreme
                    poverty (since 1990)
                  </p>
                </li>
                <li>
                  <p class="text18">
                    Child mortality dropped by more than half (since 1990)
                  </p>
                </li>
                <li>
                  <p class="text18">
                    The number of out of school children has dropped by more
                    than half (since 1990)
                  </p>
                </li>
                <li>
                  <p class="text18">
                    HIV/AIDS infections fell by almost 40 percent (since 2000)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="forthSection" style="">
        <div class="fullContainer">
          <div class="contentContainer">
            <h2
              class="marginCenter textCenter"
              style="color: #237abd; font-size: 40px; margin: 25px"
            >
              China's Research about SDGs
            </h2>
            <div class="flexJustCenter flexWrap">
              <div
                class="contentCard padding_10 res_w50"
                style="height: 300px; background: azure"
              >
                <div class="titleSection h100 flexCol flexJustBetween">
                  <h3>Data Presentation System</h3>
                  <div>
                    <router-link
                      to="/SdgPlatform/SDGsAnalyze/Display"
                      class="wzhRouterLink"
                    >
                      <button
                        class="wzhButton trans dark lineButton flexCol flexJustCenter"
                      >
                        DISCOVER
                        <div class="hoverLine"></div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="contentCard padding_10 res_w50"
                style="height: 300px; background: #bcedfd"
              >
                <div class="titleSection h100 flexCol flexJustBetween">
                  <h3>
                    Evaluation Analysis System for Target
                    <span
                      class="textStress darkBlueFull"
                      style="background-color: #dda73a"
                      >2</span
                    >
                  </h3>
                  <div>
                    <router-link
                      to="/SdgPlatform/SDGsAnalyze/Display"
                      class="wzhRouterLink"
                    >
                      <button
                        class="wzhButton trans dark lineButton flexCol flexJustCenter"
                      >
                        DISCOVER
                        <div class="hoverLine"></div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="contentCard padding_10 res_w50"
                style="height: 300px; background: #bcedfd"
              >
                <div class="titleSection h100 flexCol flexJustBetween">
                  <h3>
                    Evaluation Analysis System for Target
                    <span
                      class="textStress darkBlueFull"
                      style="background-color: #27bfe6"
                      >6</span
                    >
                  </h3>
                  <div>
                    <router-link
                      to="/SdgPlatform/SDGsAnalyze/Display"
                      class="wzhRouterLink"
                    >
                      <button
                        class="wzhButton trans dark lineButton flexCol flexJustCenter"
                      >
                        DISCOVER
                        <div class="hoverLine"></div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="contentCard padding_10 res_w50"
                style="height: 300px; background: azure"
              >
                <div class="titleSection h100 flexCol flexJustBetween">
                  <h3>
                    Evaluation Analysis System for Target
                    <span
                      class="textStress darkBlueFull"
                      style="background-color: #f26a2e"
                      >9</span
                    >
                  </h3>
                  <div>
                    <router-link
                      to="/SdgPlatform/SDGsAnalyze/Display"
                      class="wzhRouterLink"
                    >
                      <button
                        class="wzhButton trans dark lineButton flexCol flexJustCenter"
                      >
                        DISCOVER
                        <div class="hoverLine"></div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="contentCard padding_10 w100"
                style="height: 300px; background: #d5f7fb"
              >
                <div class="titleSection h100 flexCol flexJustBetween">
                  <h3>
                    Comprehensive Analysis of Multiple Indexes in Fujian
                    Province
                  </h3>
                  <div>
                    <router-link
                      to="/SdgPlatform/SDGsAnalyze/Display"
                      class="wzhRouterLink"
                    >
                      <button
                        class="wzhButton trans dark lineButton flexCol flexJustCenter"
                      >
                        DISCOVER
                        <div class="hoverLine"></div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      sdgTargets: [
        {
          name: "NO POVERTY",
          back: require("../img/sdgsGoals/img-goal-1.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-01.jpg"),
          l_img: require("../img/sdgsGoals/img-goal-1.jpg"),
          color: '#e5233d',
          info:'End poverty in all its forms everywhere.',
        },
        {
          name: "ZERO HUNGER ",
          back: require("../img/sdgsGoals/img-goal-2.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-02.jpg"),
          color: '#dda73a',
          info:'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.',
        },
        {
          name: "GOOD HEALTH AND WEEL-BEING",
          back: require("../img/sdgsGoals/img-goal-3.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-03.jpg"),
          color: '#4ba146',
          info:'Ensure healthy lives and promote well-being for all at all ages.',
        },
        {
          name: "QUALITY EDUCATION",
          back: require("../img/sdgsGoals/img-goal-4.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-04.jpg"),
          color: '#c7212f',
          info:'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
        },
        {
          name: "GENDER EQUALITY",
          back: require("../img/sdgsGoals/img-goal-5.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-05.jpg"),
          color: '#ef3f2d',
          info:'Achieve gender equality and empower all women and girls.',
        },
        {
          name: "CLEAN WATER AND SANITATION",
          back: require("../img/sdgsGoals/img-goal-6.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-06.jpg"),
          color: '#27bfe6',
          info:'Ensure availability and sustainable management of water and sanitation for all.',
        },
        {
          name: "AFFORDABLE AND CLEAN ENERGY",
          back: require("../img/sdgsGoals/img-goal-7.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-07.jpg"),
          color: '#fbc413',
          info:'Ensure access to affordable, reliable, sustainable and modern energy for all.',
        },
        {
          name: "DECENT WORK AND ECONOMIC GROWTH",
          back: require("../img/sdgsGoals/img-goal-8.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-08.jpg"),
          color: '#a31b44',
          info:'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.',
        },
        {
          name: "INDUSTRYM INNOVATION AND INFRASTRUCTURE",
          back: require("../img/sdgsGoals/img-goal-9.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-09.jpg"),
          color: '#f26a2e',
          info:'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.',
        },
        {
          name: "REDUCED INEQUALITIES",
          back: require("../img/sdgsGoals/img-goal-10.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-10.jpg"),
          color: '#e01383',
          info:'Make cities and human settlements inclusive, safe, resilient and sustainable.',
        },
        {
          name: "REDUCED INEQUALITIES",
          back: require("../img/sdgsGoals/img-goal-11.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-11.jpg"),
          color: '#f89d2a',
          info:'Ensure sustainable consumption and production patterns.',
        },
        {
          name: "SUSTAINABLE CITIES AND COMMUNITIES",
          back: require("../img/sdgsGoals/img-goal-12.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-12.jpg"),
          color: '#bf8d2c',
          info:'Ensure sustainable consumption and production patterns.',
        },
        {
          name: "RESPONSIBLE CONSUMPTION AND PRODUCTION",
          back: require("../img/sdgsGoals/img-goal-13.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-13.jpg"),
          color: '#407f46',
          info:'Take urgent action to combat climate change and its impacts.',
        },
        {
          name: "CLIMATE ACTION",
          back: require("../img/sdgsGoals/img-goal-14.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-14.jpg"),
          color: '#2097d4',
          info:'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.',
        },
        {
          name: "LIFE BELOW WATER",
          back: require("../img/sdgsGoals/img-goal-15.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-15.jpg"),
          color: '#5aba47',
          info:'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.',
        },
        {
          name: "LIFE ON LAND",
          back: require("../img/sdgsGoals/img-goal-16.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-16.jpg"),
          color: '#146a9f',
          info:'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
        },
        {
          name: "PEACE, JUSTICE AND STRONG INSTITUTIONS",
          back: require("../img/sdgsGoals/img-goal-17.jpg"),
          s_img: require("../img/sdgsGoals/E_SDG_Icons-17.jpg"),
          color: '#13496b',
          info:'Strengthen the means of implementation and revitalize the global partnership for sustainable development.',
        },
      ],
    };
  },
};
</script>

<style scoped src="../../../assets/css/wzhStyle.css"></style>
<style scoped src="../../../assets/css/wzhFlexContainer.css"></style>
<style scoped src="../../../assets/css/wzhGrid.css"></style>
<style scoped src="../../../assets/font/font.css"></style>
<style scoped>

#firstSection {
  position: relative;
}
#secondSection{
  margin-top: 100px;
}
#thirdSection {
  margin-top: 40px;
  background-image: url(../img/sdgsGoals/global-goals.png);
  background-size: 280px;
  background-repeat: no-repeat;
  background-position: center;
}
#forthSection {
  padding: 20px 0 40px;
  background-image: linear-gradient(
    337deg,
    rgb(15 173 233),
    #85cdf7,
    #d9f2f9 85%
  );
  /* margin-top: 40px; */
}

#sdgInfoContainer{
  color: #f2f2f2;
  margin-top: 40px;
}
#sdgInfoContainer h1{
 font-size:60px
}

#sdgInfo{
  margin-top: 40px;
    text-align: justify;
    max-width: 1280px;
}
.title {
  width: 100%;
  height: 55px;
  /* backdrop-filter: blur(10px);
    background-color: rgb(255 255 255 / 50%); */
}
.padding_10 {
  padding: 10px;
}
.padding_20 {
  padding: 20px;
}
.padding_40 {
  padding: 40px;
}
.padding_480{
  padding: 40px 80px;
}

.text18 {
  font-size: 18px;
}
.headSection {
  height: 601px;
  width: 100%;
}
.bodySection {
  /* padding: 10px 0; */
}

.headBack {
  width: 100%;
  height: 100%;
  background-image: url(../img/italy_clip.jpg);
}

.briefBlock {
  margin-top: -60px;
  height: 190px;
  background: white;

  /* z-index: 1000; */
}

.blueFull {
    border-color: #029dd9;
    background-color: #09a8dd;
    color: #f2f2f2;
}

.blueFont {
  color: #0aa8dd;
}

.textStress {
  /* background: #0aa8dd;
  color: #fafafa; */
  padding: 0 5px;
  border-radius: 3px;
}

.contentContainer {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.fullContainer {
  width: 100%;
  height: 100%;
  padding: 30px;
}

.briefBlock:before {
  content: "";
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-left: -50%;
  background-image: linear-gradient(212deg, #0fa7db, #ffd2d2);
  position: absolute;
  z-index: -1;
}

.titleSection {
  padding: 20px 25px;
}

.h100 {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "akrobat-extrabold";
}

.titleSection h1,
.titleSection h2,
.titleSection h3,
.titleSection h4,
.titleSection h5 {
  margin: 0;
}

#firstSection:before {
  content: "";
  width: 50%;
  height: 190px;
  right: 0;
  background: white;
  position: absolute;
  /* z-index: -1; */
}

.w50{
  width: 50%;
}

.w80 {
  width: 80%;
}

.w100 {
  width: 100%;
}

.blueBlock {
  background-image: linear-gradient(206deg, #bcedfd 70%, #f6fdff);
  /* background: #cef3ff; */
  top: 0;
  right: 0;
  z-index: -999;
  position: absolute;
}

#acryBlock{
  max-width: 1440px;
  width: 112%;
  position: absolute;
}

.acryMask {
  
  backdrop-filter: blur(20px) saturate(150%);
  
  background: rgba(255, 255, 255, 0.521);
  /* bottom: -95px; */
  z-index: -1;
}

.contentCard {
  height: 400px;
  /* padding: 10px; */
  background-size: cover;
  background-position: center;
  position: relative;
}

.contentCard .bottomImg{
  max-width: 150px;
}

.contentCard:hover .cardMask {
  height: 100%;
}

.contentCard:hover .bottomImg{
  display: none;
}

.cardMask {
  position: absolute;
  width: 100%;
  height: 0;
  left: 0;
  top: 0;
  color: whitesmoke;
  transition: 0.4s;
  overflow: hidden;
}

.cardMask h1,
.cardMask h2,
.cardMask h3,
.cardMask h4,
.cardMask h5
{
  margin: 10px 0;
}

.displayLiDisc{
  margin-left:160px ;
}

.displayLiDisc li {
  display: list-item;
  list-style: disc;
}

.displayLiDisc li > p {
  margin: 10px 0;
  font-family: Arial, sans-serif;
  text-align:justify;
}

.briefTitle{
  padding: 20px 80px;
  height:180px
}

.phoneBriefTitle{
    display: none;
  }

@media only screen and (max-width: 1520px){
  #acryBlock{
    width: calc(100vw - 80px);
  }
}

@media only screen and (max-width: 1280px){
  .achieveBlock{
    flex-direction: column;
  }
  .displayLiDisc{
    margin-left: 0;
  }
}

@media only screen and (max-width: 1080px){
  .res_w20{
    width: 25%;
  }
}
@media only screen and (max-width:  800px){
  #sdgInfoContainer{
    margin-top: 0;
  }
}
@media only screen and (max-width:  626px){
  #sdgInfoContainer{
    padding: 10px 20px;
  }
  #sdgInfoContainer h1{
    text-align: center;
    font-size:40px ;
  }
  #sdgInfoContainer h2{
    font-size:28px ;
  }
  #sdgInfo{
    margin-top: 0;
  }
  .achieveBlock{
    padding: 20px;
  }
  .achieveBlock h2{
    text-align:center ;
  }
  .res_w20{
    width: 50%;
  }
  .res_w50{
    /* width: 100%; */
  }
  #secondSection{
    margin-top: 80px;
  }
  .fullContainer{
    padding:10px ;
  }
  .phoneBriefTitle{
    display: block;
  }
  .briefTitle{
    display: none;
  }
  .briefBlock{
    height: 220px;
  }
  .titleSection {
    padding: 10px 5px;
  }
}
</style>