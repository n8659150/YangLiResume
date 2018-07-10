<template>
  <div class="">
    <header class="row">
		<figure class="header-profile">
			<img :src='dataset.picSrc' :alt="dataset.profileAlt" class="profile-img visible-print">
		</figure>
		<section class="title">
			<h1>{{dataset.name}}</h1>
			<h2>{{dataset.title}}</h2>
		</section>
		<address>
			<ul class="contact">
				<li class="contact-email">
					<a :href="'mailto://' + dataset.email">jackli900421@hotmail.com</a>
				</li>
				<li class="contact-phone">{{dataset.mobile}}</li>
				<li class="contact-github">
					<a :href="dataset.github">{{dataset.github}}</a>
				</li>
			</ul>
		</address>
	</header>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
    };
  },
  props: ["dataset"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-left: -0.1px;
  margin-right: -0.1px;
  overflow: hidden;
}
header {
  overflow-y: hidden;
  zoom: 1;
  padding-bottom: 6px;
  background-color: #00487e;
  color: #f6fff6;
}
.content,
header {
  padding: 30px 45px;
}
.title {
  float: right;
  text-align: center;
  margin: 0;
}

@media screen and (max-width: 767px) {
  .title {
    float: none;
    text-align: center;
  }

  .title h1 {
    font-size: 50px;
  }
}

.title h1,
.title h2 {
  margin: 5px 0;
  line-height: 1;
}

.title h1 {
  padding: 5px 0;
  color: #f6fff6;
}

.title h2 {
  padding: 5px 6px;
  font-weight: 400;
}

@media (max-width: 767px) {
  .header-profile {
    float: none;
    margin: 0;
  }

  address {
    overflow-y: hidden;
    zoom: 1;
    clear: both;
  }

  .header-profile .profile-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 13px auto;
  }
}

@media (min-width: 768px) {
  .header-profile {
    float: left;
    margin: 0;
  }

  address {
    overflow-y: hidden;
    zoom: 1;
  }

  .header-profile .profile-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
}

header .contact {
  float: left;
  width: 100%;
  margin: 0;
  padding-left: 16px;
  margin-top: 16px;
}

@media print or (max-width: 767px) {
  header .contact {
    float: none;
    margin-top: 10px;
    padding-left: 5px;
  }
}

@media (max-width: 767px) {
  header .contact li {
    list-style-type: none;
    font-style: normal;
    line-height: 1.5;
    font-size: 15px;
    word-break: break-all;
  }
}

@media (min-width: 768px) {
  header .contact li {
    list-style-type: none;
    font-style: normal;
    line-height: 1.57;
    font-size: 18px;
    word-break: break-all;
  }
}

header a:link,
header a:visited {
  color: #fff;
}

header a:active,
header a:hover {
  color: #a3d3d1;
}

.contact-phone {
  padding-left: 28px;
}

.contact-phone::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f095";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.contact-email {
  padding-left: 28px;
}

.contact-email::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f0e0";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.contact-github {
  padding-left: 28px;
}

.contact-github::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f092";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.contact-sinaweibo {
  padding-left: 28px;
}

.contact-sinaweibo::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f18a";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.contact-blog {
  padding-left: 28px;
}

.contact-blog::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f09e";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.contact-phone {
  padding-left: 28px;
}

.contact-phone::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f095";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}
</style>
