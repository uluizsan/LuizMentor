
export default {
    show() {
        const overlay = document.createElement('div');
        overlay.id = 'consequence-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.95)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.padding = '20px';
        overlay.style.backdropFilter = 'blur(10px)';

        overlay.innerHTML = `
            <div class="animate-enter" style="text-align: center;">
                <i data-lucide="skull" style="color: var(--color-danger); width: 64px; height: 64px; margin-bottom: 20px;"></i>
                <h2 style="color: var(--color-danger); font-size: 2rem; margin-bottom: 20px;">SIMULADOR DE DESASTRE</h2>
                
                <div style="text-align: left; background: rgba(255,0,0,0.1); padding: 20px; border-radius: 12px; border: 1px solid var(--color-danger); margin-bottom: 30px;">
                    <p style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="trending-down" style="color: var(--color-text-secondary)"></i>
                        Perda de 2h de Prospecção
                    </p>
                    <p style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="calendar-off" style="color: var(--color-text-secondary)"></i>
                        Atraso no projeto +1 dia
                    </p>
                    <p style="display: flex; align-items: center; gap: 10px; font-weight: bold; color: var(--color-text-primary);">
                        <i data-lucide="user-x" style="color: var(--color-danger)"></i>
                        Nível de 'Nice Guy': CRÍTICO
                    </p>
                </div>

                <div style="display: flex; gap: 10px;">
                    <button id="btn-abort" class="btn btn-primary">
                        ABORTAR (Dizer NÃO)
                    </button>
                    <button id="btn-confirm-fail" class="btn btn-ghost" style="font-size: 0.8rem;">
                        Aceitar Fracasso
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        window.lucide.createIcons();

        // Close logic
        const close = () => document.body.removeChild(overlay);

        document.getElementById('btn-abort').onclick = close;
        document.getElementById('btn-confirm-fail').onclick = () => {
            alert('Registro de falha salvo nos logs.'); // Stub
            close();
        };
    }
};
