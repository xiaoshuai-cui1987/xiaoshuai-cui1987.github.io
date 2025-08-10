const langData = {
    en: {
        title: "SHACMAN Heavy Duty Trucks",
        headerTitle: "SHACMAN Heavy Duty Automobile Import & Export Co., Ltd.",
        headerDesc: "Professional Exporter of Shaanxi Heavy Duty Trucks",
        navProducts: "Products",
        navAbout: "About Us",
        navServices: "Services",
        navNews: "News",
        navContact: "Contact",
        productsTitle: "Hot Products",
        product1Title: "SHACMAN X3000 8X4 DUMP TRUCK",
        product1Link: "Read More",
        product2Title: "SHACMAN X3000 6X4 DUMP Truck",
        product2Link: "Read More",
        product3Title: "SHACMAN F3000 6X4 DUMP Truck",
        product3Link: "Read More",
        aboutTitle: "About Us",
        aboutDesc: "Shaanxi Hexin Shenghua Trading Co., Ltd. is a globally authorized export enterprise of Shaanxi Automobile Heavy Truck, exporting products such as dump trucks, tractors, mixer trucks, truck mounted cranes, mining vehicles, etc. Our core business is customized export services for complete vehicles, radiating to more than 60 countries. We specialize in vehicle customization, military quality, and professional exports.",
        servicesTitle: "Customization & Services",
        servicesDesc: "We provide precise development and refined marketing in product layout, fully meeting customers' differentiated needs. Our professional after-sales service system ensures reliable quality and coverage for all service stations.",
        newsTitle: "News Information",
        news1: "What to Know About Refrigerated Transport Trucks",
        news2: "Why Choose SHACMAN Tractor Trucks",
        news3: "Things to Consider When Buying a Concrete Mixer Truck",
        news4: "The Ultimate Guide to Tractor Trucks",
        contactTitle: "Contact Us",
        contactDesc: "We are ready to provide service for customers at any time. If you are interested in our products, or have any ideas, please feel free to contact us.",
        contactAddress: "Address: Shaanxi Heavy Duty Automobile Import & Export Co., Ltd.",
        footer: "Copyright © Shaanxi Heavy Duty Automobile Import & Export Co.,Ltd All Rights Reserved"
    },
    zh: {
        title: "陕汽重卡",
        headerTitle: "陕西重型汽车进出口有限公司",
        headerDesc: "陕西重卡专业出口商",
        navProducts: "产品中心",
        navAbout: "关于我们",
        navServices: "服务与定制",
        navNews: "新闻资讯",
        navContact: "联系我们",
        productsTitle: "热销产品",
        product1Title: "陕汽X3000 8X4自卸车",
        product1Link: "了解更多",
        product2Title: "陕汽X3000 6X4自卸车",
        product2Link: "了解更多",
        product3Title: "陕汽F3000 6X4自卸车",
        product3Link: "了解更多",
        aboutTitle: "关于我们",
        aboutDesc: "陕西合信盛华贸易有限公司是陕西汽车重卡全球授权出口企业，出口产品包括自卸车、牵引车、搅拌车、随车吊、矿用车等。主营整车定制化出口服务，业务辐射60多个国家，专注车辆定制、军工品质、专业出口。",
        servicesTitle: "服务与定制",
        servicesDesc: "我们在产品布局上实现精准开发和精细化营销，充分满足客户的差异化需求。专业的售后服务体系确保可靠质量和服务站全覆盖。",
        newsTitle: "新闻资讯",
        news1: "冷藏运输车须知",
        news2: "为什么选择陕汽牵引车",
        news3: "购买搅拌车需考虑的事项",
        news4: "牵引车终极指南",
        contactTitle: "联系我们",
        contactDesc: "我们随时为客户提供服务。如您对产品感兴趣或有任何想法，欢迎随时联系我们。",
        contactAddress: "地址：陕西重型汽车进出口有限公司",
        footer: "版权所有 © 陕西重型汽车进出口有限公司 保留所有权利"
    }
};

function setLang(lang) {
    const d = langData[lang];
    function setText(id, val) {
        var el = document.getElementById(id);
        if (el) el.textContent = val;
    }
    setText('title', d.title);
    setText('header-title', d.headerTitle);
    setText('header-desc', d.headerDesc);
    setText('nav-products', d.navProducts);
    setText('nav-about', d.navAbout);
    setText('nav-services', d.navServices);
    setText('nav-news', d.navNews);
    setText('nav-contact', d.navContact);
    setText('products-title', d.productsTitle);
    setText('product1-title', d.product1Title);
    setText('product1-link', d.product1Link);
    setText('product2-title', d.product2Title);
    setText('product2-link', d.product2Link);
    setText('product3-title', d.product3Title);
    setText('product3-link', d.product3Link);
    setText('about-title', d.aboutTitle);
    setText('about-desc', d.aboutDesc);
    setText('services-title', d.servicesTitle);
    setText('services-desc', d.servicesDesc);
    setText('news-title', d.newsTitle);
    setText('news1', d.news1);
    setText('news2', d.news2);
    setText('news3', d.news3);
    setText('news4', d.news4);
    setText('contact-title', d.contactTitle);
    setText('contact-desc', d.contactDesc);
    setText('contact-address', d.contactAddress);
    setText('footer', d.footer);
    // Email和Tel多语言支持
    setText('contact-email', lang === 'zh' ? '邮箱：shacman@shacman-truck.com' : 'Email: shacman@shacman-truck.com');
    setText('contact-tel', lang === 'zh' ? '电话：+86 135 7927 1170' : 'Tel.: +86 135 7927 1170');
}

window.onload = function () {
    setLang('en');
};
