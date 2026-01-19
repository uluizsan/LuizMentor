
import Dashboard from './components/Dashboard.js';
import RoutineService from './services/RoutineService.js';
import MockFirebase from './services/MockFirebase.js';

// Initialize Services
RoutineService.init();
MockFirebase.init();

class App {
    constructor() {
        this.appElement = document.getElementById('app');
        this.render();
    }

    async render() {
        this.appElement.innerHTML = '';
        const dashboard = await Dashboard.render();
        this.appElement.appendChild(dashboard);
        
        // Re-scan for icons since we injected HTML
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

// Start App
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
