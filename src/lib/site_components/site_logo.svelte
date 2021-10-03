<script>
    const rotate_time = 500
    const delay = 4000

    let current_width = 1

    let transition_function = "cubic-bezier(.58,0,1,1)"

    const images = [
        "/images/logo/star.svg",
        "/images/logo/sport.svg",
        "/images/logo/cinema.svg"
    ]

    

    let current_image = 2

    setInterval(function () {
        transition_function = "cubic-bezier(.58,0,1,1)"
        current_width=0
    }, delay)
    setTimeout(function () {
        setInterval(function (){
            transition_function = "cubic-bezier(0,0,.58,1)"
            current_width=1;
            current_image = (current_image + 1) % (images.length)
        }, delay)
    }, rotate_time)

</script>

<div class="main_container">
    <div class="circle">
        <div style={`transform: scale(${current_width}, 1);transition: all ${transition_function} ${rotate_time}ms;`} class="scalar">
            <img src={images[current_image]} alt="" class="icon">
        </div>
    </div>
</div>

<style>
    .main_container {
        --logo_size: 128px;
        display: flex;
        justify-content: center;
        width: var(--logo_size);
        height: var(--logo_size);
        background-image: url("/images/logo/tagaro-logo.png");
        background-size: var(--logo_size);
    }
    .circle {
        --circle_size: 63px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--circle_size);
        height: var(--circle_size);
        margin-top: calc(var(--logo_size) / 17);
        border: 4px solid;
        border-color: white;
        border-radius: 50%;
    }
    .icon {
        width: 68%;
    }
    .scalar {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>