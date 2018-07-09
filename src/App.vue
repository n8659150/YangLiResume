<template>
  <div id="app">
    <div class="container">
      <!-- top -->
      <main>  
        <Profile :picSrc="picSrc" data="" />
        <!-- main left -->
        <Education data="" />
        <Language data="" />
        <Experience data="" />
        <!-- main right -->
        <Skills data="" />
        <Contact data="" />
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
      picSrc: require("./assets/jackli-profile.jpg")
    };
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
</style>

