<article class="package_overview">
	<h2>
		<slot name="title">
			<span class="missing">Unknown title</span>
		</slot>
	</h2>

	<div class="alignment">
		<ul class="points">
			<slot name="points">
				<li class="missing">No Points given</li>
			</slot>
		</ul>

		<div class="image">
			<slot name="image">
				<span class="missing">Unknown image</span>
			</slot>
		</div>
	</div>
</article>

<style>
	.alignment {
		display: flex;
	}
	.points {
		list-style: none;
		margin-left: 0;
		padding-left: 0;
	}
	.points li {
		padding-left: 1em;
		text-indent: -1em;
	}
	.points li::before {
		content: '+';
		padding-right: 5px;
	}
</style>
