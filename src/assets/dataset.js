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
export default {
    profile,
    education
}