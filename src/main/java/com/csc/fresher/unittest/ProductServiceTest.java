package com.csc.fresher.unittest;

import static org.junit.Assert.*;

import org.junit.Test;

import com.csc.fresher.angular.dto.Product;
import com.csc.fresher.angular.service.ProductService;

public class ProductServiceTest {

	@Test
	public void testGetProductList() {
		ProductService product = new ProductService();
		assertNotNull(product.getProductList());
	}

	@Test
	public void testAddProduct() {
		Product product = new Product();
		product.setName("Samsung Galaxy S7 Edge");
		product.setModel("128Gb G935F Black Pearl");
		product.setPrice(20000000);
		product.setYear(2016);
		product.setProducer("Samsung");
		product.setAvailable(12);
		ProductService p = new ProductService();
		p.addProduct(product);
	}

	@Test
	public void testGetProduct() {
		ProductService p = new ProductService();
		assertEquals(p.getProduct(1).getName(), "Iphone 7");
	}
	@Test
	public void testGetProductNull() {
		ProductService p = new ProductService();
		assertNull(p.getProduct(50));
	}

	@Test
	public void testUpdateAvailable() {
		ProductService p = new ProductService();
		p.updateAvailable(20, 1);
		assertEquals(20, p.getProduct(1).getAvailable());
	}
	
	@Test
	public void testUpdateAvailableZero() {
		ProductService p = new ProductService();
		p.updateAvailable(-10, 3);
		assertEquals(0, p.getProduct(1).getAvailable());
	}
	@Test
	public void testUpdateAvailableNegative() {
		ProductService p = new ProductService();
		p.updateAvailable(-10, 3);
		assertEquals(-10, p.getProduct(1).getAvailable());
	}
	

	@Test
	public void testIncreaseAvailableByOne() {
		ProductService p = new ProductService();
		int available = p.getProduct(2).getAvailable();
		p.increaseAvailableByOne(2);
		assertEquals(available, p.getProduct(2).getAvailable()-1);
	}

	@Test
	public void testDecreaseAvailableByOne() {
		ProductService p = new ProductService();
		int available = p.getProduct(2).getAvailable();
		p.decreaseAvailableByOne(2);
		assertEquals(available, p.getProduct(2).getAvailable()+1);
	}

}
