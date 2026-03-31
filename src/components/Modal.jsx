
function Modal({ aberto, onClose, mensagem }){
    if (!aberto) return null;
    
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 cursor-default">
            <div className="bg-white p-6 rounded-2xl text-center relative z-50">
                <h2 className="text-lg font-bold mb-2">{mensagem}</h2>

                <button
                onClick={onClose}
                className="bg-lime-600 text-white px-4 py-2 rounded-lg mt-2 cursor-pointer"
                >
                    OK
                </button>
            </div>
        </div>
    );
}

export default Modal;