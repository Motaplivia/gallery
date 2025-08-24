class ImageModel {
    constructor() {
this.images = [
    {
        id: 1,
        title: "Rosa Com Gotas de Água",
        category: "flores",
        url: "img/plantas/flores/rosa-vermelha-com-gotas-de-agua.jpg",
        keywords: ["rosa", "vermelha", "rosa vermelha", "flor", "romântica", "gotas", "água"]
    },
    {
        id: 2,
        title: "Lírio do Campo",
        category: "flores",
        url: "img/plantas/flores/lirio-branco-do-campo.jpg",
        keywords: ["lírio", "branco", "flor", "campo"]
    },
    {
        id: 3,
        title: "Peônias Vermelhas",
        category: "flores",
        url: "img/plantas/flores/peonias-vermelhas.jpg",
        keywords: ["peônias", "vermelha", "flor", "arbusto"]
    },
    {
        id: 4,
        title: "Flores de Cerejeira",
        category: "flores",
        url: "img/plantas/flores/flores-de-cerejeira.jpeg",
        keywords: ["sakura", "cerejeira", "flor", "primavera", "Japão", "rosa"]
    },
    {
        id: 5,
        title: "Lírio do Vale",
        category: "flores",
        url: "img/plantas/flores/lirio-do-vale.jpeg",
        keywords: ["lírio", "vale", "flor", "pequena", "flores pequenas"]
    },
    {
        id: 6,
        title: "Carvalho Centenário",
        category: "arvores",
        url: "img/plantas/arvores/carvalho-centenario.jpeg",
        keywords: ["carvalho", "árvore", "grande", "sombra", "natureza", "força", "centenário"]
    },
    {
        id: 7,
        title: "Bambu Verde",
        category: "arvores",
        url: "img/plantas/arvores/bambu-verde.jpeg",
        keywords: ["bambu", "verde", "árvore", "oriental"]
    },
    {
        id: 8,
        title: "Palmeiras Tropicais",
        category: "arvores",
        url: "img/plantas/arvores/palmeiras-tropicais.jpg",
        keywords: ["palmeira", "tropical", "árvore", "praia", "verão", "exótica"]
    },
    {
        id: 9,
        title: "Bétula Branca",
        category: "arvores",
        url: "img/plantas/arvores/betula-branca.jpg",
        keywords: ["bétula", "branca", "árvore", "inverno", "elegante", "nórdica"]
    },
    {
        id: 10,
        title: "Seringueira",
        category: "arvores",
        url: "img/plantas/arvores/seringueira.jpeg",
        keywords: ["seringueira", "latex", "árvore", "seiva"]
    },
    {
        id: 11,
        title: "Echeveria Elegans",
        category: "suculentas",
        url: "img/plantas/suculentas/echeveria-elegan.jpg",
        keywords: ["echeveria", "suculenta", "rosa", "resistente", "decorativa", "casa"]
    },
    {
        id: 12,
        title: "Aloe Vera",
        category: "suculentas",
        url: "img/plantas/suculentas/aloe-vera.jpeg",
        keywords: ["aloe", "vera", "suculenta", "medicinal", "gel"]
    },
    {
        id: 13,
        title: "Cactos Bola",
        category: "suculentas",
        url: "img/plantas/suculentas/cacto-bola.jpg",
        keywords: ["cacto", "bola", "suculenta", "deserto", "resistente", "redondo"]
    },
    {
        id: 14,
        title: "Sedum",
        category: "suculentas",
        url: "img/plantas/suculentas/sedum.jpg",
        keywords: ["sedum", "adorável", "suculenta", "pequena"]
    },
    {
        id: 15,
        title: "Rabo de Tatu - Haworthia Fasciata",
        category: "suculentas",
        url: "img/plantas/suculentas/haworthia-fasciata.jpeg",
        keywords: ["Haworthia fasciata", "rabo de tatu", "suculenta", "pontuda"]
    },
    {
        id: 16,
        title: "Manjericão Fresco",
        category: "ervas",
        url: "img/plantas/ervas/manjericao-fresco.jpg",
        keywords: ["manjericão", "fresco", "erva", "culinária", "aroma"]
    },
    {
        id: 17,
        title: "Alecrim Aromático",
        category: "ervas",
        url: "img/plantas/ervas/alecrim-aromatico.jpg",
        keywords: ["alecrim", "aromático", "erva", "culinária"]
    },
    {
        id: 18,
        title: "Hortelã Refrescante",
        category: "ervas",
        url: "img/plantas/ervas/hortela-refrescante.jpg",
        keywords: ["hortelã", "refrescante", "erva", "chá", "frescor"]
    },
    {
        id: 19,
        title: "Camomila ressecada",
        category: ["ervas", "flores"], 
        url: "img/plantas/ervas/camomila.jpeg",
        keywords: ["camomila", "calmante", "flores secas", "chá"]
    },
    {
        id: 20,
        title: "Sálvia Medicinal",
        category: "ervas",
        url: "img/plantas/ervas/salvia-medicinal.jpg",
        keywords: ["sálvia", "medicinal", "erva", "purificação", "sabedoria"]
    },
    {
        id: 21,
        title: "Pé de Romã",
        category: "frutiferas",
        url: "img/plantas/frutiferas/pe-roma.jpg",
        keywords: ["frutifera", "frutiferas", "romã"]
    },
    {
        id: 22,
        title: "Figueira",
        category: "frutiferas",
        url: "img/plantas/frutiferas/figueira.jpg",
        keywords: ["frutifera", "frutiferas", "figueira"]
    },
    {
        id: 23,
        title: "Pé de Tangerinas",
        category: "frutiferas",
        url: "img/plantas/frutiferas/pe-de-tangerinas.jpg",
        keywords: ["frutifera", "frutiferas", "tangerina"]
    },
    {
        id: 24,
        title: "Pé de Manga",
        category: "frutiferas",
        url: "img/plantas/frutiferas/pe-de-manga.jpg",
        keywords: ["frutifera", "frutiferas", "manga"]
    },
    {
        id: 25,
        title: "Laranjeira",
        category: "frutiferas",
        url: "img/plantas/frutiferas/pe-de-laranja.jpg",
        keywords: ["frutifera", "frutiferas", "laranja", "ácida"]
    }
];

        this.currentCategory = 'todas';
        this.currentSearch = '';
        this.currentPage = 1;
        this.imagesPerPage = 8;
    }

    // Obter imagens
    getAllImages() {
        return this.images;
    }

    // Filtrar imagens por categoria e busca
    getFilteredImages() {
        let filtered = this.images;

        // Filtra por categoria
        if (this.currentCategory !== 'todas') {
            filtered = filtered.filter(image => {
                // Se category for array, verifica se inclui a categoria
                if (Array.isArray(image.category)) {
                    return image.category.includes(this.currentCategory);
                }
                // Se for string, apenas compara
                return image.category === this.currentCategory;
            });
        }

        // Filtra por busca
    if (this.currentSearch.trim() !== '') {
        const searchTerm = this.currentSearch.toLowerCase();

        filtered = filtered.filter(image => {
            const inTitle = image.title?.toLowerCase().includes(searchTerm);

            // Tratar category como array
            const categories = Array.isArray(image.category) ? image.category : [image.category];
            const inCategory = categories.some(cat => (cat || '').toLowerCase().includes(searchTerm));

            // Tratar keywords
            const keywords = Array.isArray(image.keywords) ? image.keywords : [];
            const inKeywords = keywords.some(k => (k || '').toLowerCase().includes(searchTerm));

            return inTitle || inCategory || inKeywords;
        });
}


        return filtered;
    }

    // Retorna as imagens da página atual
getCurrentPageImages() {
    const filtered = this.getFilteredImages();
    const totalPages = Math.max(1, Math.ceil(filtered.length / this.imagesPerPage));

    // Garante que a página exibida não ultrapasse o total disponível
    if (this.currentPage > totalPages) {
        this.currentPage = totalPages;
    }

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
        this.currentPage = 1; 
    }

    // Definir palavra de busca
    setSearch(search) {
        this.currentSearch = search;
        this.currentPage = 1; 
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