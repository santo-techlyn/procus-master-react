export default function Preloader() {
    // preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);
    return (
        <>
            {/* preloader starts */}
            <div id="preloader">
                <div id="loader"></div>
            </div>

        </>
    )
}