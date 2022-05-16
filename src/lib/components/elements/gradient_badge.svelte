<div class="badge">
	<p>
		<slot />
	</p>
</div>

<style>
	.badge {
		background: rgb(255, 89, 20);
		background: linear-gradient(
			148deg,
			rgba(255, 89, 20, 1) 18%,
			rgba(173, 3, 126, 1) 70%,
			rgba(51, 57, 152, 1) 96%
		);
		border-radius: 50%;
		width: 120px;
		height: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
	}
</style>
