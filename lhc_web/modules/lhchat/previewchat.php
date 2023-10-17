<?php

$tpl = erLhcoreClassTemplate::getInstance('lhchat/previewchat.tpl.php');

$chat = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelChat', $Params['user_parameters']['chat_id']);

if ( erLhcoreClassChat::hasAccessToRead($chat) ) {

    // Support older PHP versions
    if (!function_exists('str_ends_with')) {
        function str_ends_with(string $haystack, string $needle): bool
        {
            $needle_len = strlen($needle);
            return ($needle_len === 0 || 0 === substr_compare($haystack, $needle, - $needle_len));
        }
    }

    $keyword = isset($_GET['keyword']) ? (string)$_GET['keyword'] : '';
    $keyword = str_replace(":",': ',$keyword);
    preg_match_all('~(?|"([^"]+)"|(\S+))~', $keyword, $matches);
    $keywords = [];
    if (isset($matches[1]) && !empty($matches[1])){
        foreach ($matches[1] as $potentionalKeyword) {
            if (trim(str_ireplace(['and','or'],'',$potentionalKeyword)) != '' && str_ends_with($potentionalKeyword,":") === false) {
                $keywords[] = $potentionalKeyword;
            }
        }
    }

    $tpl->set('keyword',$keywords);
    $tpl->set('chat',$chat);
    $tpl->set('see_sensitive_information', $currentUser->hasAccessTo('lhchat','see_sensitive_information'));
} else {
    $tpl->setFile( 'lhchat/errors/adminchatnopermission.tpl.php');
}

echo $tpl->fetch();
exit;

?>