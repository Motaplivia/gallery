class ImageView {
    constructor() {
        this.galleryContainer = document.getElementById('gallery');
        this.searchInput = document.getElementById('searchInput');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.pageInfo = document.getElementById('pageInfo');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Evento de busca
        this.searchInput.addEventListener('input', (e) => {
            this.onSearchChange && this.onSearchChange(e.target.value);
        });

        // Eventos de categoria
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.onCategoryChange && this.onCategoryChange(category);
            });
        });

        // Eventos de paginação
        this.prevBtn.addEventListener('click', () => {
            this.onPrevPage && this.onPrevPage();
        });

        this.nextBtn.addEventListener('click', () => {
            this.onNextPage && this.onNextPage();
        });
    }

    // Renderizar a galeria de imagens
    renderGallery(images) {
        // Aplicar efeito de fade out
        this.galleryContainer.classList.add('fade-out');
        
        setTimeout(() => {
            if (images.length === 0) {
                this.renderNoResults();
            } else {
                this.renderImages(images);
            }
            
            // Aplicar efeito de fade in
            this.galleryContainer.classList.remove('fade-out');
            this.galleryContainer.classList.add('fade-in');
            
            setTimeout(() => {
                this.galleryContainer.classList.remove('fade-in');
            }, 300);
        }, 150);
    }

    // Renderizar imagens
    renderImages(images) {
        this.galleryContainer.innerHTML = images.map(image => `
            <div class="image-card" data-id="${image.id}">
                <img src="${image.url}" alt="${image.title}" loading="lazy">
                <div class="image-info">
                    <h3 class="image-title">${image.title}</h3>
                    <span class="image-category">${this.capitalizeFirst(image.category)}</span>
                </div>
            </div>
        `).join('');
    }

    // Renderizar mensagem de "nenhum resultado"
    renderNoResults() {
        this.galleryContainer.innerHTML = `
            <div class="no-results">
                <h3>Nenhuma imagem encontrada</h3>
                <p>Tente ajustar os filtros ou termos de busca</p>
            </div>
        `;
    }

    // Atualizar botões de categoria
    updateCategoryButtons(activeCategory) {
        this.categoryButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.category === activeCategory) {
                button.classList.add('active');
            }
        });
    }

    // Atualizar paginação
    updatePagination(paginationInfo) {
        this.pageInfo.textContent = `Página ${paginationInfo.currentPage} de ${paginationInfo.totalPages}`;
        
        this.prevBtn.disabled = !paginationInfo.hasPrevPage;
        this.nextBtn.disabled = !paginationInfo.hasNextPage;
    }

    // Atualizar campo de busca
    updateSearchInput(searchTerm) {
        this.searchInput.value = searchTerm;
    }

    // Mostrar estatísticas
    showStats(stats) {
        console.log('Estatísticas da galeria:', stats);
    }

    // Método auxiliar para capitalizar primeira letra
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Callbacks para eventos
    setSearchChangeCallback(callback) {
        this.onSearchChange = callback;
    }

    setCategoryChangeCallback(callback) {
        this.onCategoryChange = callback;
    }

    setPrevPageCallback(callback) {
        this.onPrevPage = callback;
    }

    setNextPageCallback(callback) {
        this.onNextPage = callback;
    }

    // Animações de transição
    animateImageCard(card, delay = 0) {
        card.style.animationDelay = `${delay}ms`;
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    }

    // Mostrar loading
    showLoading() {
        this.galleryContainer.innerHTML = `
            <div class="loading" style="text-align: center; padding: 2rem;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 1rem; color: #6c757d;">Carregando imagens...</p>
            </div>
        `;
    }

    // Esconder loading
    hideLoading() {
        // O loading será substituído pela renderização normal
    }
} 