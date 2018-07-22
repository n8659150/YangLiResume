const profile = {
    // 头像路径
    picSrc:require('../assets/jackli-profile.jpg'),
    picAlt:'OoJackLioO',
    name:'李暘',
    title:'前端工程师',
    email:'jackli900421@hotmail.com',
    mobile:'86-13585976350',
    github:'https://github.com/n8659150'
};
const education = {
    title_cn:'教育经历',
    title_en:'Education',
    eduInfo_1:{
        yearFrom:'2014',
        yearTo:'2016',
        uni_cn:'昆士兰科技大学',
        uni_logo:require('../assets/QUT-logo.png'),
        major:'数据科学',
        entitle:'硕士',
        GPA:'5.91',
        GPA_full:'7.00',
        HD_criteria:'(6.0以上)',
        HD_courses_1:'移动网络工程,学术研究实践',
        HD_courses_2:'普适移动系统开发，毕业设计项目1，2'
    },
    eduInfo_2:{
        yearFrom:'2012',
        yearTo:'2014',
        uni_cn:'昆士兰科技大学',
        uni_logo:require('../assets/QUT-logo.png'),
        major:'信息科技',
        entitle:'学士',
        GPA:'5.43',
        GPA_full:'7.00',
        HD_criteria:'(6.0以上)',
        HD_courses_1:'电子商业网站开发，网页设计与开发',
        HD_courses_2:'数据库设计，游戏产业入门'
    }
}
const language = {
    title_cn:'语言水平',
    title_en:'Language',
    lang_1:'国语',
    lang_1_level:'精通',
    bar1_width:'95%',
    lang_2:'英语',
    lang_2_level:'熟练',
    bar2_width:'85%',
    lang_3:'沪语',
    lang_3_level:'地道',
    bar3_width:'99%',
    desc1:'能够流畅阅读大部分英文网页，理解技术类官方文档'
}
const experience = {
    title_cn:'项目与工作经验',
    title_en:'Experience',
    experience1_place:'Tekkers 极客团队 - 布里斯班',
    experience1_time:'2015.07 ~ 至今',
    experience1_position:'前端工程师',
    experience1_jd:'分析项目需求，制定计划，并按主流项目开发流程（敏捷开发），实现前端组件的开发与维护。与后端工程师配合,实现项目功能对接',
    experience1_tasks:['手机扫码点餐应用（支持iOS/安卓）','澳大利亚著名面包店BreadTop面包供应商的订单管理系统','澳大利亚热销净水器品牌ShieldFilter电商官网']
}
export default {
    profile,
    education,
    language,
    experience
}