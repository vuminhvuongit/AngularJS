var app = angular.module('myApp');
//var showTableEnable = false;
app.controller("productList", function($scope, $rootScope, githubService, $routeParams, $http){

	/*
	 *add available 
	 *param{id_product}
	 */
	$scope.addTotal = function(index){
		$http({
			method: 'get',
			url: "http://localhost:9000/fresherangular/product/increase/"+index
		}).success(function(data, status, headers, config){
			getData();
		})
		.error(function(data, status, headers, config){
			alert("Error");
		});
	}
	
	/*
	 *minus available 
	 *param{id_product}
	 */
	$scope.minusTotal = function(index){
		$http.get("http://localhost:9000/fresherangular/product/decrease/"+index)
			.success(function(response){
				getData();
			}).error(function(response){
				alert("Error");
		});
	}
	
	/*
	 *add product 
	 *param{name, model, year, price, producer, available}
	 */
	$scope.AddProduct = function(){
		$scope.product = {
			name:$scope.model, 
			model:$scope.model, 
			year:$scope.year, 
			price:$scope.price,
			producer:$scope.producer, 
			available:$scope.available
		};
		$http.post("http://localhost:9000/fresherangular/product/add",$scope.product)
		.success(function(data, status, headers, config){
			getData();
			$scope.model=""; 
			$scope.model=""; 
			$scope.year="";
			$scope.price="";
			$scope.producer=""; 
			$scope.available="";
		}).error(function(data, status, headers, config){});
		
	}
	
	/*
	 *	orderBy 
	 *	param{value_order}
	 */
	$scope.orderByMe = function(x){
		$scope.myOrderBy = x;
	}
	
	
	/*
	 *	remove product
	 *	param{id_product}
	 */
	$scope.remove = function(id){
		$http.get("http://localhost:9000/fresherangular/product/remove/"+id)
		.success(function(data, status, headers, config){
			getData();
		}).error(function(data, status, headers, config){});
	}
	/*
	 *	get product list 
	 *	param{}
	 *	return list product
	 */ 
	function getData() { 
		$http.get("http://localhost:9000/fresherangular/product/list")
		.success(function(data, status, headers, config){
			$scope.products = data;
		}).error(function(data, status, headers, config){});
		//$rootScope.showTableEnable = true;
	}
	getData();
	
	/*
	 * get detail
	 * param{id_product}
	 * return info product
	 */
	$scope.detail = function(id){
		$scope.showTableEnable = false;
		$scope.showDetail = true;
		$http.get("http://localhost:9000/fresherangular/product/get/"+id)
		.success(function(data, status, headers, config){
			$scope.detailProduct = data;
		}).error(function(data, status, headers, config){});
	}
	
	
	
	//edit available item(function wasn't provided)
	$scope.editAvailable = function(id){
		$("#number_input_"+id).attr("readonly", false);
	}
	$scope.updateAvailable = function(id){
		//alert($("#number_input_"+id).val());
		$("#number_input_"+id).attr("readonly", true);
		$http.get("http://localhost:9000/fresherangular/product/updateAvailable/"+id+"/"+$("#number_input_"+id).val())
		.success(function(data, status, headers, config){
			getData();
		}).error(function(data, status, headers, config){});
	}
	//end edit available
	
});



/*
 * switch to controller detail
 * 
 */
app.controller("Detail", function(
        $scope, $rootScope, githubService, $routeParams, $http) {
	$http.get("http://localhost:9000/fresherangular/product/get/"+$routeParams.id)
	.success(function(data, status, headers, config){
		$scope.detailProduct = data;
	}).error(function(data, status, headers, config){});
	//alert($rootScope.showTableEnable);
	$rootScope.showTableEnable = true;
});



















