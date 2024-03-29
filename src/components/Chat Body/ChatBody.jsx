function ChatBody() {
    return (
        <div className="main px-xl-5 px-lg-4 px-3">
            <div className="chat-body">
                <div className="chat d-flex justify-content-center align-items-center h-100 text-center py-xl-4 py-md-3 py-2">
                    <div className="container-xxl">
                        <div className="avatar lg avatar-bg me-auto ms-auto mb-5">
                            <img
                                className="avatar lg rounded-circle border"
                                src="/img/avatar5.png"
                                alt=""
                            />
                            <span className="a-bg-1" />
                            <span className="a-bg-2" />
                        </div>
                        <h5 className="font-weight-bold">Hi, Daeng Coding</h5>
                        <p>Start messaging.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBody;