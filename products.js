// 产品数据加载和展示模块
class ProductManager {
    constructor() {
        this.products = [];
        this.currentLang = 'en';
    }

    async loadProducts() {
        try {
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error('Failed to load products');
            }
            this.products = await response.json();
            return this.products;
        } catch (error) {
            console.error('Error loading products:', error);
            throw error;
        }
    }

    renderProducts() {
        const container = document.getElementById('products-container');
        if (!container) return;

        container.innerHTML = '';

        this.products.forEach(product => {
            const productCard = this.createProductCard(product);
            container.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product';
        card.onclick = () => this.navigateToProductDetail(product.id);

        const name = this.currentLang === 'zh' ? product.nameZh : product.name;
        const description = this.currentLang === 'zh' ? product.descriptionZh : product.description;
        const imgPath = `img/${product.imgFolder}/${product.headImg}`;

        card.innerHTML = `
            <img src="${imgPath}" alt="${name}" onerror="this.src='img/placeholder.jpg'">
            <h3>${name}</h3>
            <p>${description}</p>
        `;

        return card;
    }

    navigateToProductDetail(productId) {
        window.location.href = `product-detail.html?id=${productId}`;
    }

    updateLanguage(lang) {
        this.currentLang = lang;
        if (this.products.length > 0) {
            this.renderProducts();
        }
    }

    showLoading() {
        const container = document.getElementById('products-container');
        if (container) {
            container.innerHTML = '<div class="loading">Loading products...</div>';
        }
    }

    showError(message) {
        const container = document.getElementById('products-container');
        if (container) {
            container.innerHTML = `<div class="error">${message}</div>`;
        }
    }
}

// 初始化产品管理器
const productManager = new ProductManager();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async () => {
    productManager.showLoading();
    
    try {
        await productManager.loadProducts();
        productManager.renderProducts();
    } catch (error) {
        productManager.showError('Failed to load products. Please try again later.');
    }
});

// 语言切换支持
function updateProductLanguage(lang) {
    productManager.updateLanguage(lang);
}
