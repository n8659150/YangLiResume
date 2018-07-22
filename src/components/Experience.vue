<template>
  <div class="">
    <section class="experience">
        <div class="sec-title-wrapper">
          <h3 class="sec-title">
            <span class="sec-title-ch">{{dataset.title_cn}}</span>
            <span class="sec-title-en">{{dataset.title_en}}</span>
          </h3>
        </div>
        <div class="timeline-wrapper">
          <ul class="sec-content timeline">
            <li class="timeline-item experience-internship">
              <h3 class="timeline-title">
                <span class="experience-place">{{dataset.experience1_place}}</span>
                <time class="experience-time">{{dataset.experience1_time}}</time>
              </h3>
              <dl class="experience-description timeline-content">
                <dt class="experience-position">{{dataset.experience1_position}}</dt>
                <dd class="experience-task">
                  {{dataset.experience1_jd}}
                </dd>
                <dt class="experience-position">经手项目:</dt>
                <dd class="experience-task" v-if="Array.isArray(dataset.experience1_tasks)" v-for="(task,index) in dataset.experience1_tasks" :key="index">
                  {{task}}
                </dd>
              </dl>
            </li>
            <li class="timeline-item experience-internship">
              <h3 class="timeline-title">
                <span class="experience-place">广联达兴安得力
                  -
                  上海</span>
                <time class="experience-time">2013.11
                  ~
                  2014.02</time>
              </h3>
              <dl class="experience-description timeline-content">
                <dt class="experience-position">网页设计与重构（实习）</dt>
                <dd class="experience-task">协助完成公司
                  <strong>官网文库</strong>及公司旗下
                  <strong>重要业务网站</strong>“平方建材网”的
                  <strong>改版设计</strong>
                </dd>
                <dd class="experience-task">所设计的文库界面
                  <strong>获得leader认可</strong>并列入征选范围</dd>
              </dl>
            </li>
            <li class="timeline-item experience-project">
              <h3 class="timeline-title">
                <span class="experience-project-type">个人项目</span>
                <span class="experience-title-aside">
                  <a href="https://github.com/n8659150/ProjectMinderWebApp" class="experience-project-link">源代码</a>
                  <a href="https://projectminder.firebaseapp.com" class="experience-project-link">Demo</a>
                </span>
              </h3>
              <dl class="experience-description timeline-content">
                <dt class="experience-project-name">Project
                  Minder</dt>
                <dd class="experience-task">专为
                  <strong>昆士兰科技大学</strong>科技工程学院定制开发的
                  <strong>项目信息管理系统</strong>
                </dd>
                <dd class="experience-task">
                  <strong>独自</strong>完成
                  <strong>用户验证</strong>模块，项目信息
                  <strong>增删改</strong>模块，系统
                  <strong>界面</strong>，
                  <strong>表单</strong>，
                  <strong>注册/登录</strong>及其他相关页面的
                  <strong>设计与开发</strong>
                </dd>
                <dd class="experience-task">
                  <strong>独自</strong>完成后端
                  <strong>数据库</strong>与前端页面的
                  <strong>对接</strong>与
                  <strong>调试</strong>
                </dd>
                <dd class="experience-task">
                  <strong>独自</strong>完成
                  <strong>20分钟英语</strong>项目汇报演讲及
                  <strong>12000字英语</strong>项目报告</dd>
              </dl>
            </li>
            <li class="timeline-item experience-project">
              <h3 class="timeline-title">
                <span class="experience-project-type">个人项目</span>
                <span class="experience-title-aside">
                  <a href="https://github.com/n8659150/ProjectMinderMobile" class="experience-project-link">源代码</a>
                </span>
              </h3>
              <dl class="experience-description timeline-content">
                <dt class="experience-project-name">Project
                  Minder
                  Mobile</dt>
                <dd class="experience-task">Project
                  Minder项目信息管理系统的
                  <strong>配套手机应用</strong>
                </dd>
                <dd class="experience-task">
                  <strong>独自</strong>完成系统
                  <strong>原有模块</strong>，新增
                  <strong>“用户会议管理”</strong>，
                  <strong>“学生地点定位”模块</strong>，
                  <strong>手机端</strong>界面的
                  <strong>移植</strong>，
                  <strong>设计</strong>，
                  <strong>调试</strong>和
                  <strong>二次开发</strong>
                </dd>
                <dd class="experience-task">
                  <strong>独自</strong>完成
                  <strong>20分钟英语</strong>项目汇报演讲及
                  <strong>10000字英语</strong>项目报告</dd>
                <dd class="experience-task">项目汇报演讲获导师
                  <strong>满分好评</strong>并考虑作为
                  <strong>学校现有系统的新模块部署</strong>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      msg: "Experience"
    };
  },
  props: ["dataset"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experience-place,
.experience-project-type {
  float: left;
}

.experience-time,
.experience-title-link {
  float: right;
}

.experience-position,
.experience-project-name {
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 5px 0;
}

.experience-task {
  padding-left: 0;
  margin: 0;
}

.experience-title-aside {
  float: right;
  list-style-type: none;
}

.experience-project-link {
  border-radius: 6px;
  padding: 1px 10px;
  background-color: #fff;
  font-size: 14px;
  margin-left: 10px;
}

.experience-project-link:link,
.experience-project-link:visited {
  color: #333;
}

.experience-project-link:active,
.experience-project-link:hover {
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
}

.experience .sec-title-wrapper::before {
  content: "\f135";
}

.experience-internship.timeline-item::before {
  content: "\f0b1";
}

.experience-project.timeline-item::before {
  content: "\f135";
}

.experience-task {
  padding-left: 28px;
}

.experience-task::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f013";
  width: 28px;
  margin-left: -28px;
  display: inline-block;
}

.experience-project-link {
  padding-left: 24px;
}

.experience-project-link::before {
  font-family: FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
  content: "\f0c1";
  width: 19px;
  margin-left: -19px;
  display: inline-block;
}
</style>
