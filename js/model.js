class ImageModel {
    constructor() {
        this.images = [
            {
                id: 1,
                title: "Rosa Vermelha",
                category: "flores",
                url: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
                keywords: ["rosa", "vermelha", "flor", "romântica", "jardim", "beleza"]
            },
            {
                id: 2,
                title: "Girassol Dourado",
                category: "flores",
                url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=300&fit=crop",
                keywords: ["girassol", "dourado", "flor", "verão", "alegria", "energia"]
            },
            {
                id: 3,
                title: "Lavanda Roxa",
                category: "flores",
                url: "https://images.unsplash.com/photo-1528722828814-77b9b83a6b5b?w=400&h=300&fit=crop",
                keywords: ["lavanda", "roxa", "flor", "aroma", "calmante", "provence"]
            },
            {
                id: 4,
                title: "Tulipa Colorida",
                category: "flores",
                url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&h=300&fit=crop",
                keywords: ["tulipa", "colorida", "flor", "primavera", "holanda", "elegante"]
            },
            {
                id: 5,
                title: "Carvalho Centenário",
                category: "arvores",
                url: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=300&fit=crop",
                keywords: ["carvalho", "árvore", "grande", "sombra", "natureza", "força"]
            },
            {
                id: 6,
                title: "Bambu Verde",
                category: "arvores",
                url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop",
                keywords: ["bambu", "verde", "árvore", "crescimento", "sustentável", "oriental"]
            },
            {
                id: 7,
                title: "Palmeira Tropical",
                category: "arvores",
                url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                keywords: ["palmeira", "tropical", "árvore", "praia", "verão", "exótica"]
            },
            {
                id: 8,
                title: "Bétula Branca",
                category: "arvores",
                url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
                keywords: ["bétula", "branca", "árvore", "inverno", "elegante", "nórdica"]
            },
            {
                id: 9,
                title: "Echeveria Elegans",
                category: "suculentas",
                url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
                keywords: ["echeveria", "suculenta", "rosa", "resistente", "decorativa", "casa"]
            },
            {
                id: 10,
                title: "Aloe Vera",
                category: "suculentas",
                url: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
                keywords: ["aloe", "vera", "suculenta", "medicinal", "gel", "benefícios"]
            },
            {
                id: 11,
                title: "Cacto Bola",
                category: "suculentas",
                url: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=300&fit=crop",
                keywords: ["cacto", "bola", "suculenta", "deserto", "resistente", "redondo"]
            },
            {
                id: 12,
                title: "Sedum Adorável",
                category: "suculentas",
                url: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400&h=300&fit=crop",
                keywords: ["sedum", "adorável", "suculenta", "pequena", "jardim", "cobertura"]
            },
            {
                id: 13,
                title: "Manjericão Fresco",
                category: "ervas",
                url: "https://images.unsplash.com/photo-1618377382884-8fd508cb9d19?w=400&h=300&fit=crop",
                keywords: ["manjericão", "fresco", "erva", "culinária", "aroma", "italiano"]
            },
            {
                id: 14,
                title: "Alecrim Aromático",
                category: "ervas",
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                keywords: ["alecrim", "aromático", "erva", "mediterrâneo", "culinária", "memória"]
            },
            {
                id: 15,
                title: "Hortelã Refrescante",
                category: "ervas",
                url: "https://images.unsplash.com/photo-1628557044798-3c249c7ec8c7?w=400&h=300&fit=crop",
                keywords: ["hortelã", "refrescante", "erva", "chá", "mojito", "frescor"]
            },
            {
                id: 16,
                title: "Sálvia Medicinal",
                category: "ervas",
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                keywords: ["sálvia", "medicinal", "erva", "purificação", "sabedoria", "cura"]
            },
            {
                id: 17,
                title: "Jardim Zen",
                category: "jardim",
                url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                keywords: ["jardim", "zen", "paz", "meditação", "japonês", "harmonia"]
            },
            {
                id: 18,
                title: "Jardim Vertical",
                category: "jardim",
                url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
                keywords: ["jardim", "vertical", "urbano", "sustentável", "paredes", "verde"]
            },
            {
                id: 19,
                title: "Jardim de Flores",
                category: "jardim",
                url: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&h=300&fit=crop",
                keywords: ["jardim", "flores", "colorido", "primavera", "beleza", "natureza"]
            },
            {
                id: 20,
                title: "Jardim Botânico",
                category: "jardim",
                url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                keywords: ["jardim", "botânico", "diversidade", "educação", "conservação", "ciência"]
            }
        ];

        this.currentCategory = 'todas';
        this.currentSearch = '';
        this.currentPage = 1;
        this.imagesPerPage = 4;
    }

    // Obter todas as imagens
    getAllImages() {
        return this.images;
    }

    // Filtrar imagens por categoria e busca
    getFilteredImages() {
        let filtered = this.images;

        // Filtrar por categoria
        if (this.currentCategory !== 'todas') {
            filtered = filtered.filter(image => image.category === this.currentCategory);
        }

        // Filtrar por busca
        if (this.currentSearch.trim() !== '') {
            const searchTerm = this.currentSearch.toLowerCase();
            filtered = filtered.filter(image => 
                image.title.toLowerCase().includes(searchTerm) ||
                image.category.toLowerCase().includes(searchTerm) ||
                image.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
            );
        }

        return filtered;
    }

    // Obter imagens para a página atual
    getCurrentPageImages() {
        const filtered = this.getFilteredImages();
        const startIndex = (this.currentPage - 1) * this.imagesPerPage;
        const endIndex = startIndex + this.imagesPerPage;
        return filtered.slice(startIndex, endIndex);
    }

    // Obter informações de paginação
    getPaginationInfo() {
        const filtered = this.getFilteredImages();
        const totalPages = Math.ceil(filtered.length / this.imagesPerPage);
        
        return {
            currentPage: this.currentPage,
            totalPages: totalPages,
            totalImages: filtered.length,
            hasNextPage: this.currentPage < totalPages,
            hasPrevPage: this.currentPage > 1
        };
    }

    // Definir categoria atual
    setCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1; // Reset para primeira página
    }

    // Definir termo de busca
    setSearch(search) {
        this.currentSearch = search;
        this.currentPage = 1; // Reset para primeira página
    }

    // Ir para próxima página
    nextPage() {
        const paginationInfo = this.getPaginationInfo();
        if (paginationInfo.hasNextPage) {
            this.currentPage++;
            return true;
        }
        return false;
    }

    // Ir para página anterior
    prevPage() {
        const paginationInfo = this.getPaginationInfo();
        if (paginationInfo.hasPrevPage) {
            this.currentPage--;
            return true;
        }
        return false;
    }

    // Ir para página específica
    goToPage(page) {
        const paginationInfo = this.getPaginationInfo();
        if (page >= 1 && page <= paginationInfo.totalPages) {
            this.currentPage = page;
            return true;
        }
        return false;
    }

    // Obter estatísticas
    getStats() {
        const filtered = this.getFilteredImages();
        return {
            totalImages: this.images.length,
            filteredImages: filtered.length,
            currentCategory: this.currentCategory,
            currentSearch: this.currentSearch
        };
    }
} 