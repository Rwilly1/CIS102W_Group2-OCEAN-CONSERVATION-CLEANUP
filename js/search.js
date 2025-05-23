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
                     Our dedicated team works to restore damaged coral reefs through innovative techniques and community involvement. We've successfully rehabilitated over 50 reef systems across the globe.
                     Marine Life Protection
                     From sea turtle nesting sites to whale migration routes, we work tirelessly to protect marine species and their habitats through conservation and education initiatives.
                     Ocean Cleanup
                     Through organized beach cleanups and advanced ocean waste collection systems, we're tackling the growing crisis of marine pollution head-on.
                     The Future if We Fail to Act on Climate Change
                     This visualization shows a stark reality projected thousands of years into the future if we fail to act on climate change. While these sea level changes may seem distant, our current consumption patterns and greenhouse gas emissions are dramatically accelerating this timeline. New York City, home to millions and an icon of human achievement, could face severe flooding much sooner and eventual submersion if we don't change course.
                     The time to act is now. Every year of inaction speeds up this future scenario. Through immediate and sustained efforts to reduce carbon emissions, protect our oceans, and preserve our coastlines, we can slow and potentially prevent this future from becoming reality.
                     How You Can Help
                     Volunteer
                     Join our global network of volunteers in beach cleanups, diving programs, and educational workshops. No experience necessary - just bring your passion for ocean conservation!
                     10,000+ Volunteers Worldwide
                     Spread Awareness
                     Follow us on social media and share our message. Help us educate others about the importance of ocean conservation and the impact of human activities.
                     100+ Coral Reefs Protected
                     Donate
                     Your contribution directly supports our conservation efforts. Every dollar helps us protect marine ecosystems and remove harmful waste from our oceans.
                     50,000+ Pounds of Ocean Waste Removed
                     Awards & Partnerships
                     Environmental Excellence Award 2024
                     Recognized by the International Marine Conservation Society for outstanding contributions to ocean preservation
                     Community Impact Award 2024
                     Awarded by the Global Ocean Initiative for engaging over 10,000 volunteers in marine conservation efforts
                     PADI
                     Official diving certification partner for our underwater conservation programs
                     NOAA
                     Collaborating on marine research and data collection initiatives
                     World Wildlife Fund
                     Partnership for marine species protection and habitat conservation
                     Latest News
                     Artificial Reefs Show Promising Results in Marine Recovery
                     A network of 3D-printed artificial reefs deployed last year has shown remarkable success in supporting marine biodiversity, with scientists reporting rapid colonization by coral species and increased fish populations.
                     Major Ocean Clean-up Initiative Launches in Pacific
                     A groundbreaking initiative to remove plastic waste from the Great Pacific Garbage Patch has been launched, utilizing innovative technology to collect and recycle ocean debris while protecting marine life.
                     Webpage developed by Remington Williams`.toLowerCase()
        },
        'about.html': {
            title: 'About',
            content: `About Us
                     Our Story
                     Ocean Conservation & Cleanup Crew was founded in hopes of making our oceans cleaner one day at a time.
                     Today, we are at the forefront of ocean conservation efforts, partnering with research institutions, governments, and communities to protect marine ecosystems for future generations. Our combination of direct action, scientific research, and education initiatives makes us uniquely positioned to address the complex challenges facing our oceans.
                     Our Mission & Values
                     Protect
                     We are committed to protecting marine ecosystems through evidence-based conservation programs and advocacy for stronger environmental regulations.
                     Research
                     We conduct and support scientific research to better understand marine ecosystems and develop innovative solutions to conservation challenges.
                     Clean
                     We organize and execute large-scale cleanup operations targeting beaches, coastlines, and ocean waters to remove harmful debris and pollutants.
                     Educate
                     We believe in the power of education to drive lasting change, and we work to raise awareness about ocean conservation through schools, communities, and digital platforms.
                     Meet Our Team
                     Dr. Michael Barnes
                     Marine Biologist & Founder
                     With over 15 years of experience in marine conservation, Dr. Barnes founded Ocean Conservation & Cleanup Crew after witnessing firsthand the devastating effects of plastic pollution on coral reefs.
                     Nichole Hahn
                     Coral Restoration Specialist
                     Nichole leads our coral nursery programs and has developed innovative methods for coral fragmentation and growth that have been adopted by conservation groups worldwide.
                     Lynne Foster
                     Operations Director
                     Lynne oversees all of our cleanup operations, coordinating thousands of volunteers across multiple continents and ensuring maximum impact with our limited resources.
                     Dr. Antoine Frazier
                     Education Program Director
                     Dr. Antoine develops our educational resources and outreach programs, bringing ocean conservation into classrooms and communities around the world.
                     Our Results
                     This is a Coral Reef Before and After being restored by our team
                     Our Impact
                     10,000+ Volunteers Worldwide
                     100+ Coral Reefs Protected
                     50,000+ Pounds of Ocean Waste Removed
                     Join Our Mission
                     We believe that everyone can make a difference in protecting our oceans. Whether you're a scientist, a student, or simply someone who cares about marine life, there's a place for you in our community.
                     Webpage developed by Cory Jenks`.toLowerCase()
        },
        'get-involved.html': {
            title: 'Get Involved',
            content: `Get Involved
                     Regardless of your age or background, your help can make the ocean a better place.
                     How Can You Help?
                     Lower Plastic Use
                     Plastic is the largest source of pollution in our oceans, with over 358 trillion microplastic particles floating just on the ocean's surface.
                     Making small changes to your life, such as opting for plastic-free alternatives and reusable items can significantly reduce your plastic use.
                     Reduce Greenhouse Gas Emissions
                     Greenhouse gases, such as carbon dioxide and methane, can trap heat from the sun, increasing the ocean's temperature and disturbing it's ecosystem.
                     Just by reducing everyday habits like driving and electricity consumption, you can reduce your carbon footprint.
                     Reduce Chemical Use
                     Toxic chemicals are one of the leading causes of pollution and can easily be reduced by avoiding the use of pesticides, fertilizers, and finding environmentally-friendly alternatives.
                     If You Want to Make a Greater Impact..
                     Beach Cleanups
                     Volunteers are ALWAYS welcome. Regardless of age, you can participate in a beach cleanup and make our beaches and shores a better place for humans and marine animals alike.
                     Advocate for Organizations
                     Spreading the word and supporting non-profit organizations is a great way to to help combat the damage done to our oceans by inviting more people to join our cause.
                     Work With Our Partners
                     Learn to Dive With PADI
                     PADI is our official diving certification partner for our underwater conservation programs.
                     PADI's scuba diving certification is globally recognized, never expires and allows you to dive anywhere in the world.
                     Conduct Research With NOAA
                     NOAA offers countless research opportunities for all ages, including students in both high school and college. NOAA also offers resources for educators to deepen their students' understanding of the climate and aquaculture science.
                     Take Action With WWF
                     Through the World Wildlife Fund, you can directly send messages and petitions to your government to support legislation and programs that help fight climate change and promote ecosystem conservation. 
                     Webpage developed by Zender Rene Aurelien-Nikolai`.toLowerCase()
        },
        'contact.html': {
            title: 'Contact',
            content: `Contact
                     How to get in touch?
                     To get in touch with us, simply use the contact information provided on this page, including our email, phone number, and mailing address. 
                     You can also fill out the sign-up form below to receive updates and stay connected. For more details about our mission and how you can get involved, scroll down there's more information waiting for you below!
                     Ocean Conservation & Cleanup Crew is committed to preserving marine ecosystems through education, action, and community engagement. We coordinate cleanups, raise awareness, and promote sustainable practices.
                     Volunteer to help!
                     Volunteering to help the ocean is a powerful way to protect marine life and preserve our planet's most vital ecosystems. It fosters a sense of community, raises environmental awareness, and allows individuals to make a tangible impact through beach cleanups, conservation efforts, and education. Every small action contributes to a healthier, more sustainable future for both people and the planet.
                     Reduce Oil Spills
                     One quart of oil can contaminate up to 250,000 gallons of ocean water. 
                     Oil spills have devastating effects on marine life, smothering animals, damaging ecosystems, and taking years to fully recover from.
                     Get in Touch
                     Email: info@oceanconservation.org
                     Phone: +1 (555) 123-4567
                     Address: Ocean Drive, Brooklyn, 11224
                     Complete the form below to get in touch and volunteer!
                      Webpage developed by Justin Sindaco`.toLowerCase()
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
