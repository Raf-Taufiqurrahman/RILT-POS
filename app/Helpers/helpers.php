<?php

if(!function_exists('formatPrice')){
    /**
     * method currencyFormat
     */
    function currencyFormat($str){
        return 'Rp.' . number_format($str, '0', '', '.');
    }
}
