<template>
    <div id="root">
    <div id="container">
        <div id="card"></div>
    </div>
    </div>
</template>

<script>
export default {
    name: "card"
};
</script>

<style scoped>
#root {
    height: 50vh;
}

#container {
    overflow: hidden;
    align-items: center;
    display: flex;
    justify-content: center;
    perspective: 800px;
    width: 100%;
    height: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/436243/blurbox.jpg');
	background-size: cover;
	background-position: center;
}

#card {
    background-image: url('https://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/GIL_826_premium.gif');
    width: 230px;
    height: 330px;
    background-size: cover;
    transform: rotatex(50deg);
    transition: all .3s ease-in-out;
    z-index: 3;
     
}

#card:hover {
    transform: rotatex(0deg);
}
</style>
