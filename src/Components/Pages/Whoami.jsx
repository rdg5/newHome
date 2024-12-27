
export const Whoami = () => {

	return (
    <div className="flex flex-col items-center justify-center h-5/6">
		  <div className="w-2/5">
			  <p className="text-xl text-gray-900">
			    I'm sanyi, currently based in Budapest. I'm a software developer at <a href="https://bobcatscoding.com" className="underline decoration-orange-600">Bobcats coding</a>. <br/>
          Outside of work, I like to <a href="/books"class="underline decoration-teal-400">read </a> 
		      and to<a class="underline decoration-orange-100"> cook</a>.
		    </p>
			  <p className="text-xl text-gray-900 pt-7">
				  Currently I enjoy working with the following things:
				</p>
				<p className="text-xl text-gray-900 pt-7"> 
					 <a href="https://qwik.builder.io" className="underline decoration-orange-600"> qwik </a>  on the frontend with 
					<a href="https://hono.dev" className="underline decoration-orange-100"> hono</a> backend, but this might change
				</p>
     </div>
	</div>
	)
}