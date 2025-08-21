class ImageController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.setupViewCallbacks();
        this.initializeGallery();
    }

    setupViewCallbacks() {
        // Configurar callbacks da view
        this.view.setSearchChangeCallback((searchTerm) => {
            this.handleSearchChange(searchTerm);
        });

        this.view.setCategoryChangeCallback((category) => {
            this.handleCategoryChange(category);
        });

        this.view.setPrevPageCallback(() => {
            this.handlePrevPage();
        });

        this.view.setNextPageCallback(() => {
            this.handleNextPage();
        });
    }

    initializeGallery() {
        // Inicializar a galeria com todas as imagens
        this.updateGallery();
    }

    // Manipular mudança de busca
    handleSearchChange(searchTerm) {
        this.model.setSearch(searchTerm);
        this.updateGallery();
    }

    // Manipular mudança de categoria
    handleCategoryChange(category) {
        this.model.setCategory(category);
        this.updateGallery();
    }

    // Manipular página anterior
    handlePrevPage() {
        if (this.model.prevPage()) {
            this.updateGallery();
        }
    }

    // Manipular próxima página
    handleNextPage() {
        if (this.model.nextPage()) {
            this.updateGallery();
        }
    }

    // Atualizar a galeria
    updateGallery() {
        // Mostrar loading brevemente para efeito visual
        this.view.showLoading();
        
        setTimeout(() => {
            // Obter dados do modelo
            const images = this.model.getCurrentPageImages();
            const paginationInfo = this.model.getPaginationInfo();
            const stats = this.model.getStats();

            // Atualizar a view
            this.view.renderGallery(images);
            this.view.updatePagination(paginationInfo);
            this.view.updateCategoryButtons(this.model.currentCategory);
            this.view.updateSearchInput(this.model.currentSearch);
            this.view.showStats(stats);

            // Animar as imagens com delay escalonado
            this.animateImageCards();
        }, 300);
    }

    // Animar as imagens com efeito escalonado
    animateImageCards() {
        const imageCards = document.querySelectorAll('.image-card');
        imageCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }

    // Método para adicionar nova imagem (para futuras expansões)
    addImage(imageData) {
        // Aqui você poderia adicionar lógica para adicionar novas imagens
        // Por enquanto, apenas atualizamos a galeria
        this.updateGallery();
    }

    // Método para remover imagem (para futuras expansões)
    removeImage(imageId) {
        // Aqui você poderia adicionar lógica para remover imagens
        // Por enquanto, apenas atualizamos a galeria
        this.updateGallery();
    }

    // Método para obter estatísticas detalhadas
    getDetailedStats() {
        const stats = this.model.getStats();
        const paginationInfo = this.model.getPaginationInfo();
        
        return {
            ...stats,
            ...paginationInfo,
            imagesPerPage: this.model.imagesPerPage
        };
    }

    // Método para resetar filtros
    resetFilters() {
        this.model.setCategory('todas');
        this.model.setSearch('');
        this.updateGallery();
    }

    // Método para ir para página específica
    goToPage(pageNumber) {
        if (this.model.goToPage(pageNumber)) {
            this.updateGallery();
        }
    }

    // Método para obter imagens filtradas (para debug)
    getFilteredImages() {
        return this.model.getFilteredImages();
    }

    // Método para obter todas as imagens (para debug)
    getAllImages() {
        return this.model.getAllImages();
    }
} 