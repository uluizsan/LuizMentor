
import MockFirebase from '../services/MockFirebase.js';

export default {
    render() {
        const container = document.createElement('div');
        container.className = 'card';
        container.style.textAlign = 'center';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';

        container.innerHTML = `
            <h4 style="margin-bottom: 15px;">Ideia ou Choro?</h4>
            <button id="btn-record" class="btn" style="
                width: 80px; 
                height: 80px; 
                border-radius: 50%; 
                background: linear-gradient(135deg, #22d3ee, #3b82f6);
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
                color: white;
            ">
                <i data-lucide="mic" style="width: 32px; height: 32px;"></i>
            </button>
            <p id="record-status" class="text-xs text-muted" style="margin-top: 15px; height: 20px;">Toque para gravar</p>
        `;

        setTimeout(() => {
            const btn = container.querySelector('#btn-record');
            const status = container.querySelector('#record-status');

            btn.addEventListener('click', async () => {
                if (btn.classList.contains('recording')) {
                    // Stop Recording
                    btn.classList.remove('recording');
                    btn.style.transform = 'scale(1)';
                    status.textContent = 'Analisando com Gemini...';

                    const result = await MockFirebase.analyzeAudio("mock_audio_blob");

                    status.textContent = `[${result.tag}] ${result.message}`;
                    status.style.color = result.tag === 'INSIGHT' ? 'var(--color-success)' : 'var(--color-text-muted)';

                } else {
                    // Start Recording
                    btn.classList.add('recording');
                    btn.style.transform = 'scale(1.1)';
                    status.textContent = 'Gravando... (Toque para parar)';
                    status.style.color = 'var(--color-danger)';
                }
            });
        }, 0);

        return container;
    }
};
