<?php

use TagsCloud\Tagging\Model\Tag;

class TagTest extends TestCase
{
	public function test_instantiation()
	{
		$tag = new Tag();
		
		$this->assertInternalType('object', $tag);
	}
}