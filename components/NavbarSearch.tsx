'use client';

export default function NavbarSearch() {
    return (
        <>
            {/* ナビバー内 */}
            <button
                className="btn btn-outline-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
            >
                🔍 Search
            </button>

            {/* モーダル */}
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                aria-labelledby="searchModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="searchModalLabel">Search</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type to search..."
                            />
                        </div>
                        <div className="modal-footer border-0">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
