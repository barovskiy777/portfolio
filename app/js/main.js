$(function () {
    const skills = $('.skills .skills__list');
    const skillsOffset = skills.offset();
    let IsSkillAnimate = false;
    $(window).scroll(function () {
        let currentOffsetTop = $(this).scrollTop();
        if (currentOffsetTop >= skillsOffset.top - 500 && !IsSkillAnimate) {
            circleProgress('.counter');
            IsSkillAnimate = true;
        }

    })

})