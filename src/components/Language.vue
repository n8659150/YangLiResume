<template>
  <div class="">
    <section class="language">
      <div class="sec-title-wrapper">
        <h3 class="sec-title">
          <span class="sec-title-ch">{{dataset.title_ch}}</span>
          <span class="sec-title-en">{{dataset.title_en}}</span>
        </h3>
      </div>
      <div class="sec-content">
        <dl class="language-certificates">
          <div class="language-cert-wrapper">
            <dt class="language-cert-type">{{dataset.lang_1}}</dt>
            <dd class="progress language-cert-score">
              <div :style="{width:dataset.bar1_width}" class="progress-bar">
                <span class="progress-label">{{dataset.lang_1_level}}</span>
              </div>
            </dd>
          </div>
          <div class="language-cert-wrapper">
            <dt class="language-cert-type">{{dataset.lang_2}}</dt>
            <dd class="progress language-cert-score">
              <div :style="{width:dataset.bar2_width}" class="progress-bar">
                <span class="progress-label">{{dataset.lang_2_level}}</span>
              </div>
            </dd>
          </div>
          <div class="language-cert-wrapper">
            <dt class="language-cert-type">{{dataset.lang_3}}</dt>
            <dd class="progress language-cert-score">
              <div :style="{width:dataset.bar3_width}" class="progress-bar">
                <span class="progress-label">{{dataset.lang_3_level}}</span>
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <ul class="language-description">
        <li class="language-desc-item">{{dataset.desc1}}</li>
        <li class="language-desc-item">能够用英语交流并讨论技术类问题</li>
        <li class="language-desc-item">能够 
          <strong>无字幕观看</strong>并
          <strong>理解</strong>英文版网课或技术类发布会视频</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      msg: "Language"
    };
  },
  props: ["dataset"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.language .sec-title-wrapper::before {
  content: "\f086";
}

.language .sec-content {
	margin: 10px 0 0 22px
}

.language-certificates {
	margin: 0;
	padding: 0
}

.language-cert-wrapper {
	font-size: 20px;
	margin-bottom: 5px;
	line-height: initial;
	overflow-y: hidden;
	zoom: 1
}

.language-cert-type {
	float: left;
	font-weight: 700
}

.language-cert-wrapper .progress {
	float: right;
	width: 76%;
	margin: 0;
	position: relative;
	right: 4%
}

@media (max-width:767px) {
	.language-cert-wrapper .progress {
		float: right;
		width: 75%
	}
}

.language-description {
	margin: 10px 0;
	padding-left: 50px
}

.language-desc-item {
	list-style-type: none;
	line-height: 1.4
}

.language .sec-title-wrapper::before {
	content: "\f086"
}

.language-desc-item::before {
	font-family: FontAwesome;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	transform: translate(0,0);
	content: "\f005";
	width: 28px;
	margin-left: -28px;
	display: inline-block
}
.progress {
	border-radius: 4px;
	background-color: #333;
	overflow: hidden
}

.progress-bar {
	background-color: #ce6b2a;
	text-align: right;
	padding-right: 10px
}

.progress-label {
	color: #fff;
	font-size: inherit
}
.language-desc-item {
  list-style-type:none;
  line-height:1.4
}
</style>
