<?php
$id = $post->ID;
$data  = get_post_custom($post->ID);
$header = wp_get_attachment_image($data['header'][0],'full');
$content = $data["contents"][0];
?>
<div class="post">
	<?php if( $header != "" ): ?>
		<div class="header-img">
			<? echo($header); ?>
		</div>
	<?php else: ?>
	<div class="header-img border">
	</div>
<? endif; ?>
	<div class="title-set">
		<p class="info-set">
			<span class="date"><?php echo get_the_date(); ?></span><span class="category">CATEGORY: <? echo get_taxonomy($id); ?></span>
		</p>
		<p class="title"><? the_title(); ?></p>
	</div>
	<div class="content">
		<? echo($content); ?>
	</div>
	<div class="content-more invisible">
		<? echo($content); ?>
	</div>
	<div class="more-btn"></div>
</div>