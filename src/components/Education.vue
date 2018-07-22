<template>
  <div class="">
    <section class="education">
      <div class="sec-title-wrapper">
        <h3 class="sec-title">
          <span class="sec-title-ch">{{dataset.title_cn}}</span>
          <span class="sec-title-en">{{dataset.title_en}}</span>
        </h3>
      </div>
      <div class="timeline-wrapper">
        <ul class="sec-content timeline">
          <li class="timeline-item education-undergraduate">
            <h3 class="timeline-title">
              <time class="education-time">{{dataset.eduInfo_1.yearFrom}}
                <span class="spaceFix"></span>~
                <span class="spaceFix"></span>{{dataset.eduInfo_1.yearTo}}
              </time>
            </h3>
            <dl class="education-description timeline-content">
              <dt class="education-name" :style="uni1Logo">{{dataset.eduInfo_1.uni_cn}}
              </dt>
              <dd class="education-major">{{dataset.eduInfo_1.major}}
                <span class="spaceFix"></span>{{dataset.eduInfo_1.entitle}}
              </dd>
              <dd class="education-honor">
                <strong>{{dataset.eduInfo_1.GPA}}</strong>
                <span class="spaceFix"></span>/
                <span class="spaceFix"></span>{{dataset.eduInfo_1.GPA_full}}
                <span class="spaceFix"></span>GPA
              </dd>
              <dd class="education-hiscore">高分科目
                <span>
                  <span class="spaceFix"></span>{{dataset.eduInfo_1.HD_criteria}}
                </span>
              </dd>
              <dd style="margin-left:28px">{{dataset.eduInfo_1.HD_courses_1}}</dd>
              <dd style="margin-left:28px">{{dataset.eduInfo_1.HD_courses_2}}
                <span class="spaceFix"></span>
                <span class="spaceFix"></span>等</dd>
            </dl>
          </li>

          <li class="timeline-item education-undergraduate">
            <h3 class="timeline-title">
              <time class="education-time">{{dataset.eduInfo_2.yearFrom}}
                <span class="spaceFix"></span>~
                <span class="spaceFix"></span>{{dataset.eduInfo_2.yearTo}}
              </time>
            </h3>
            <dl class="education-description timeline-content">
              <dt class="education-name" :style="uni2Logo">{{dataset.eduInfo_2.uni_cn}}
              </dt>
              <dd class="education-major">{{dataset.eduInfo_2.major}}
                <span class="spaceFix"></span>{{dataset.eduInfo_2.entitle}}
              </dd>
              <dd class="education-honor">
                <strong>{{dataset.eduInfo_2.GPA}}</strong>
                <span class="spaceFix"></span>/
                <span class="spaceFix"></span>{{dataset.eduInfo_2.GPA_full}}
                <span class="spaceFix"></span>GPA
              </dd>
              <dd class="education-hiscore">高分科目
                <span>
                  <span class="spaceFix"></span>{{dataset.eduInfo_2.HD_criteria}}
                </span>
              </dd>
              <dd style="margin-left:28px">{{dataset.eduInfo_2.HD_courses_1}}</dd>
              <dd style="margin-left:28px">{{dataset.eduInfo_2.HD_courses_2}}
                <span class="spaceFix"></span>
                <span class="spaceFix"></span>等</dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      uni1Logo: {
        background:
          "url(" + this.dataset.eduInfo_1.uni_logo + ") 98% center no-repeat"
      },
      uni2Logo: {
        background:
          "url(" + this.dataset.eduInfo_2.uni_logo + ") 98% center no-repeat"
      }
    };
  },
  props: ["dataset"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 360px) {
  .education-name {
    font-size: 32px;
    font-weight: 700;
    margin: 10px 0 5px 0;
  }
}

@media (max-width: 359px) {
  .education-name {
    font-size: 32px;
    font-weight: 700;
    margin: 10px 0 5px 0;
    background-image: none;
  }
}

.education-hiscore,
.education-honor,
.education-major {
  list-style-type: none;
  line-height: 1.42857143;
  margin: 0;
  padding: 0;
}

.education .sec-title-wrapper::before {
  content: "\f02d";
}

.education-undergraduate.timeline-item::before {
  content: "\f02e";
}

.education-major {
  padding-left: 28px;
}

.education-major::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f19d";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.education-honor {
  padding-left: 28px;
}

.education-honor::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f091";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.education-hiscore {
  padding-left: 28px;
}

.education-hiscore::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f0cb";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}
</style>
