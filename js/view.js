class ImageView {
    constructor() {
        this.galleryContainer = document.getElementById('gallery');
        this.searchInput = document.getElementById('searchInput');
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.pageInfo = document.getElementById('pageInfo');
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.keywordsContainer = document.getElementById('keywordsContainer');
        this.closeBtn = document.querySelector('.close-btn');
        
        this.setupEventListeners();
        this.setupModalEvents();
    }

    setupModalEvents() {
        // Fechar modal com botão X
        this.closeBtn.addEventListener('click', () => {
            this.hideModal();
        });

        // Fechar modal clicando fora
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // Prevenir que cliques dentro do modal o fechem
        this.modalContent = this.modal.querySelector('.modal-content');
        this.modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    setupEventListeners() {
        // Buscar imagens
        this.searchInput.addEventListener('input', (e) => {
            this.onSearchChange && this.onSearchChange(e.target.value);
        });

        // Selecionar categoria
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.onCategoryChange && this.onCategoryChange(category);
            });
        });

        // Paginação
        this.prevBtn.addEventListener('click', () => {
            this.onPrevPage && this.onPrevPage();
        });

        this.nextBtn.addEventListener('click', () => {
            this.onNextPage && this.onNextPage();
        });
    }

    // Mostrar as imagens na galeria
    renderGallery(plants) {
        
        this.galleryContainer.classList.add('fade-out');
        
        setTimeout(() => {
            if (plants.length === 0) {
                this.renderNoResults();
            } else {
                this.renderPlants(plants);
            }
            
            this.galleryContainer.classList.remove('fade-out');
            this.galleryContainer.classList.add('fade-in');
            
            setTimeout(() => {
                this.galleryContainer.classList.remove('fade-in');
            }, 300);
        }, 150);
    }

    // Mostrar imagens 
    renderPlants(plants) {
        this.galleryContainer.innerHTML = plants.map(plant => `
            <div class="image-card" data-id="${plant.id}">
                <img src="${plant.url}" alt="${plant.title}" loading="lazy">
                <div class="image-info">
                    <h3 class="image-title">${plant.title}</h3>
                    <span class="image-category">${Array.isArray(plant.category) ?
                        plant.category.map(c => this.capitalizeFirst(c)).join(', ') : 
                            this.capitalizeFirst(plant.category)}
</span>
                </div>
            </div>
        `).join('');
        this.bindImageClick();
    }

    // Mostrar mensagem se não forem encontrados resultados
    renderNoResults() {
        this.galleryContainer.innerHTML = `
            <div class="no-results">
                <h3>Nenhuma planta encontrada</h3>
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

    showStats(stats) {
        console.log('Estatísticas da galeria de flora:', stats);
    }

    // Capitaliza a primeira letra digitada
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
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #4a7c59; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                <p style="margin-top: 1rem; color: #6c757d;">Carregando plantas...</p>
            </div>
        `;
    }

    // Esconder loading
    hideLoading() {
       
    }

    setImageClickCallback(callback) {
        this.onImageClick = callback;
    }

    bindImageClick() {
        const imageCards = document.querySelectorAll('.image-card');
        imageCards.forEach(card => {
            card.addEventListener('click', () => {
                const id = parseInt(card.dataset.id);
                if (this.onImageClick) {
                    this.onImageClick(id);
                }
            });
        });
    }

    showModal(image) {
        // Atualizar conteúdo do modal
        this.modalImage.src = image.url;
        this.modalImage.alt = image.title;

        // Mostrar keywords
        this.keywordsContainer.innerHTML = image.keywords
            .map(keyword => `<span>${keyword}</span>`)
            .join('');

        // Mostrar modal com animação
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden'; 

        setTimeout(() => {
            this.closeBtn.focus();
        }, 100);
    }

    hideModal() {
        // Iniciar animação de fade out
        this.modal.classList.remove('show');
        document.body.style.overflow = ''; 
        
        // Limpar conteúdo após animação
        setTimeout(() => {
            this.modalImage.src = '';
            this.modalImage.alt = '';
            this.keywordsContainer.innerHTML = '';
        }, 300);
    }
}