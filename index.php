    <?php

    require_once(__DIR__ . '/vendor/giphy-php-client/autoload.php');

    $api_instance = new GPH\Api\DefaultApi();
    $api_key = "dc6zaTOxFJmzC";
    $q = "cheeseburgers";
    $limit = 10;
    $offset = 0;
    $rating = "g";
    $lang = "en";
    $fmt = "json";
    $embed_url_array=[];
    $nowOffset= $_GET["nowOffset"];
    $offset += $nowOffset;

    try {
        $result = $api_instance->gifsSearchGet($api_key, $q, $limit, $offset, $rating, $lang, $fmt);
        for($i=0; $i<$limit;$i++){
            $embed_url_array[]=$result["data"][$i]["embed_url"];
        }

        echo json_encode($embed_url_array);
    } catch (Exception $e) {
        echo 'Exception when calling DefaultApi->gifsSearchGet: ', $e->getMessage(), PHP_EOL;
    }

    ?>
