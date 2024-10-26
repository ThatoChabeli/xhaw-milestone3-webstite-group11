function calculateDiscount() {
    const courses = document.querySelectorAll('input[name="courses"]:checked');
   
    let total = 0;
    let firstAidPrice = 1500;
    let sewingPrice = 1500;
    let landscapingPrice = 1500;
    let lifeSkillsPrice = 1500;
    let childMindingPrice = 750;
    let cookingPrice = 750;
    let gardenMaintenancePrice = 750;

    courses.forEach((course) => {
        if (course.id === 'firstAid') total += firstAidPrice;
        if (course.id === 'sewing') total += sewingPrice;
        if (course.id === 'landscaping') total += landscapingPrice;
        if (course.id === 'lifeSkills') total += lifeSkillsPrice;
        if (course.id === 'childMinding') total += childMindingPrice;
        if (course.id === 'cooking') total += cookingPrice;
        if (course.id === 'gardenMaintenance') total += gardenMaintenancePrice;
    });

    let discount = 0;
    let courseCount = courses.length;

    if (courseCount === 2) {
        discount = total * 0.05;
    } else if (courseCount === 3) {
        discount = total * 0.10;
    } else if (courseCount > 3) {
        discount = total * 0.15;
    }

    let finalTotal = total - discount;

    document.getElementById('totalCost').textContent = `R${finalTotal}`;
}
