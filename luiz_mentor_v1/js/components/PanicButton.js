
import ConsequenceSimulator from './ConsequenceSimulator.js';

export default {
    render() {
        const container = document.createElement('div');

        container.innerHTML = `
            <button id="btn-panic" class="btn btn-danger" style="height: 60px;">
                <i data-lucide="siren" style="width: 24px; height: 24px;"></i>
                BOTÃO DO PÂNICO (Vou dizer Sim)
            </button>
        `;

        setTimeout(() => {
            container.querySelector('#btn-panic').addEventListener('click', () => {
                ConsequenceSimulator.show();
            });
        }, 0);

        return container;
    }
};
