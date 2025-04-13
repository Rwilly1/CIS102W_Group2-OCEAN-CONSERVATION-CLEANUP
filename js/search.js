document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    
    // Create a container for the search bar and results
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchBar.parentNode.insertBefore(searchContainer, searchBar);
    searchContainer.appendChild(searchBar);
    searchContainer.appendChild(searchResults);

    // Page content (embedded to avoid loading issues)
    const pageContents = {
        'index.html': {
            title: 'Home',
            content: `Ocean Conservation & Cleanup Crew
                     Protecting our oceans today for a better tomorrow.
                     Join us in our mission to preserve marine ecosystems and combat ocean pollution.
                     Our Conservation Programs
                     Coral Reef Restoration
                     Our dedicated team works to restore damaged coral reefs through innovative techniques and community involvement.
                     We've successfully rehabilitated over 50 reef systems across the globe.
                     Marine Life Protection
                     From sea turtle nesting sites to whale migration routes, we work tirelessly to protect marine species and their habitats through conservation and education initiatives.
                     Ocean Cleanup
                     Through organized beach cleanups and advanced ocean waste collection systems, we're tackling the growing crisis of marine pollution head-on.`.toLowerCase()
        },
        'about.html': {
            title: 'About',
            content: `About Ocean Conservation & Cleanup Crew
                     Our Mission
                     We are dedicated to preserving and protecting marine ecosystems through direct action, education, and community engagement.
                     Our Impact
                     Over 50 reef systems restored
                     Thousands of marine animals protected
                     Tons of ocean waste removed
                     Join us in making a difference for our oceans.`.toLowerCase()
        },
        'get-involved.html': {
            title: 'Get Involved',
            content: `Get Involved
                     Join Our Mission
                     Volunteer Opportunities
                     Beach Cleanup Events
                     Coral Restoration Projects
                     Marine Life Monitoring
                     Educational Programs
                     Make a difference in ocean conservation.`.toLowerCase()
        },
        'contact.html': {
            title: 'Contact',
            content: `Contact Us
                     Get in touch with Ocean Conservation & Cleanup Crew
                     Join our mission to protect marine ecosystems
                     Email us
                     Follow us on social media
                     Sign up for our newsletter`.toLowerCase()
        }
    };

    // Function to search content
    function searchContent(query) {
        const searchTerms = query.toLowerCase().split(' ');
        const results = [];

        // Search through each page's content
        Object.entries(pageContents).forEach(([url, pageData]) => {
            const content = pageData.content;
            
            // Check for exact phrase match
            if (content.includes(query.toLowerCase())) {
                results.push({
                    title: pageData.title,
                    url: url,
                    relevance: 2,
                    excerpt: getExcerpt(content, query.toLowerCase())
                });
            }
            // Check for all terms match
            else if (searchTerms.every(term => content.includes(term))) {
                results.push({
                    title: pageData.title,
                    url: url,
                    relevance: 1,
                    excerpt: getExcerpt(content, searchTerms[0])
                });
            }
        });

        return results.sort((a, b) => b.relevance - a.relevance);
    }

    // Function to get excerpt around match
    function getExcerpt(content, query) {
        const index = content.indexOf(query);
        if (index === -1) return '';
        
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + query.length + 50);
        let excerpt = content.substring(start, end);
        
        // Clean up the excerpt
        excerpt = excerpt.split(' ').slice(1, -1).join(' ');
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';
        
        // Highlight the matching text
        const highlightedExcerpt = excerpt.replace(
            new RegExp(query, 'gi'),
            match => `<span class="highlight">${match}</span>`
        );
        
        return highlightedExcerpt;
    }

    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Search handler
    const handleSearch = debounce(function(query) {
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }

        const results = searchContent(query);

        // Display results
        if (results.length > 0) {
            searchResults.innerHTML = results.map(result => `
                <a href="${result.url}" class="search-result-item">
                    <h4>${result.title}</h4>
                    <p>${result.excerpt}</p>
                </a>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item no-results">No results found</div>';
            searchResults.style.display = 'block';
        }
    }, 300);

    // Event listeners
    searchBar.addEventListener('input', (e) => handleSearch(e.target.value));
    searchBar.addEventListener('focus', () => {
        if (searchBar.value.length >= 2) {
            searchResults.style.display = 'block';
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });

    // Handle clicks within search results
    searchResults.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            searchResults.style.display = 'none';
            window.location.href = link.href;
        } else {
            e.stopPropagation();
        }
    });
});
