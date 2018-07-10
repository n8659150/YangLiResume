<template>
  <div id="app">
    <div class="container">
      <!-- top -->
      <main>  
        <Profile :dataset="profileData" />
        <!-- main left -->
        <article class="content row">
          <article class="column-6 first column">
            <Education :dataset="educationData" />
            <Language data="" />
            <Experience data="" />
          </article>
          <!-- main right -->
          <article class="column-6 last column">
            <Skills data="" />
            <Contact data="" />
          </article>
        </article>
      </main>
    </div>
  </div>  
</template>

<script>
import Profile from "./components/Profile";
import Education from "./components/Education";
import Language from "./components/Language";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import dataset from './assets/dataset.js';
export default {
  name: "App",
  components: {
    Profile,
    Education,
    Language,
    Experience,
    Skills,
    Contact
  },
  data() {
    return {
      profileData: dataset.profile,
      educationData:dataset.education
    };
  },
  mounted(){
    console.log(dataset.profile.picSrc);
  }
};
</script>
<style scoped>
.container {
  background-color: #f6fff6;
  box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.2);
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
}
@media screen and (max-width:767px) {
	.container {
		padding: 5px 0;
		margin-top: 0
	}
}

@media screen and (min-width:768px) {
	.container {
		width: 750px
	}
}

@media screen and (min-width:992px) {
	.container {
		width: 970px
	}
}

@media screen and (min-width:1200px) {
	.container {
		width: 1030px
	}
}
.content {
	padding: 30px 45px
}

@media screen and (max-width:767px) {
	.content {
		padding: 30px 10px;
		margin-top: 0;
		margin-bottom: 5px
	}
}

.row {
	margin-left: -.1px;
	margin-right: -.1px;
	overflow: hidden
}

.first {
    padding-left: 0 !important;
}
.column-6 {
    width: 50%;
}
.column {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    float: left;
}
</style>

