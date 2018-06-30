<template>
  <div id="app">
    <!-- top -->
    <Profile />
    <!-- main left -->
    <Education />
    <Language />
    <Experience />
    <!-- main right -->
    <Skills />
    <Contact />
  </div>
</template>

<script>
import Profile from './components/Profile'
import Education from './components/Education'
import Language from './components/Language'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
export default {
  name: 'App',
  components: {
    Profile,
    Education,
    Language,
    Experience,
    Skills,
    Contact

  }
}
</script>
