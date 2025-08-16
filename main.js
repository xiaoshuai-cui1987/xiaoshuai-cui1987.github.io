// 加载产品数据
async function loadProducts() {
    const container = document.getElementById('products-container');

    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        container.innerHTML = '<div class="error">Error loading products. Please try again later.</div>';
        console.error('Error loading products:', error);
    }
}

// 显示产品
function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    // 获取当前语言设置
    const currentLang = localStorage.getItem('lang') || 'en';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.onclick = () => showProductDetail(product.id);

        // 根据当前语言选择显示中英文名称和描述
        const name = currentLang === 'zh' ? product.nameZh : product.name;
        const description = currentLang === 'zh' ? product.descriptionZh : product.description;

        productDiv.innerHTML = `
            <img src="img/${product.imgFolder}/${product.headImg}" alt="${name}">
            <h3>${name}</h3>
            <p>${description}</p>
        `;

        container.appendChild(productDiv);
    });
}

// 显示产品详情
function showProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// 加载联系信息
async function loadContactInfo() {
    try {
        const response = await fetch('contact-info.json');
        if (!response.ok) {
            throw new Error('Failed to load contact info');
        }

        const contactInfo = await response.json();
        updateContactInfo(contactInfo);
    } catch (error) {
        console.error('Error loading contact info:', error);
    }
}

// 更新联系信息显示
function updateContactInfo(contactInfo) {
    const currentLang = localStorage.getItem('lang') || 'en';
    updateContactInfoWithEmailAndTel(currentLang);
}

// 更新联系信息显示
function updateContactInfoWithEmailAndTel(lang) {
    // 获取翻译文本
    const langTexts = {
        emailLabel: lang === 'zh' ? '邮箱' : 'Email',
        telLabel: lang === 'zh' ? '电话' : 'Tel'
    };

    // 更新联系信息显示
    const contactEmailElement = document.getElementById('contact-email');
    const contactTelElement = document.getElementById('contact-tel');
    const contactEmailLinkElement = document.getElementById('contact-email-link');
    const contactPhoneLinkElement = document.getElementById('contact-phone-link');
    const contactEmailLabelElement = document.getElementById('contact-email-label');
    const contactTelLabelElement = document.getElementById('contact-tel-label');

    // 从contact-info.json加载联系信息
    fetch('contact-info.json')
        .then(response => response.json())
        .then(contactInfo => {
            // 更新顶部联系信息（不带链接）
            if (contactEmailElement && contactInfo.email) {
                contactEmailElement.innerHTML = `${langTexts.emailLabel}: ${contactInfo.email}`;
            }

            if (contactTelElement && contactInfo.tel) {
                contactTelElement.innerHTML = `${langTexts.telLabel}: ${contactInfo.tel}`;
            }

            // 更新底部联系信息
            if (contactEmailLabelElement) {
                contactEmailLabelElement.textContent = langTexts.emailLabel + ":";
            }

            if (contactEmailLinkElement && contactInfo.email) {
                contactEmailLinkElement.textContent = contactInfo.email;
            }

            if (contactTelLabelElement) {
                contactTelLabelElement.textContent = (lang === 'zh' ? '电话' : 'Phone') + ":";
            }

            if (contactPhoneLinkElement && contactInfo.tel) {
                contactPhoneLinkElement.textContent = contactInfo.tel;
            }
        })
        .catch(error => {
            console.error('Error loading contact info:', error);
        });
}

// 页面加载时加载产品和联系信息
document.addEventListener('DOMContentLoaded', async function () {
    loadProducts();
    loadContactInfo();
});

// 添加语言切换时更新产品显示和联系信息的监听器
function updateProductLanguage() {
    if (document.getElementById('products-container').children.length > 0 && 
        !document.getElementById('products-container').children[0].classList.contains('loading') &&
        !document.getElementById('products-container').children[0].classList.contains('error')) {
        loadProducts();
    }
    // 语言切换时更新联系信息标签
    const currentLang = localStorage.getItem('lang') || 'en';
    updateContactInfoWithEmailAndTel(currentLang);
}

// 重写setLang函数以支持产品语言切换
const originalSetLang = setLang;
window.setLang = function(lang) {
    localStorage.setItem('lang', lang);
    originalSetLang(lang);
    updateProductLanguage();
};