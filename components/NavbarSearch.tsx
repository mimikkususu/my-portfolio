'use client';

export function NavbarSearch({ dict }: { dict: any }) {
    return (
        <>
            <button
                className="btn btn-outline-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
            >
                🔍 {dict.navbar.search}
            </button>

            <div className="modal fade" id="searchModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title">{dict.navbar.search}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={dict.search.placeholder}
                            />
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                {dict.search.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}