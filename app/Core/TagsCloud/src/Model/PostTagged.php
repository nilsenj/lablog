<?php
/**
 * Created by PhpStorm.
 * User: nilse
 * Date: 9/13/2017
 * Time: 5:04 PM
 */

namespace TagsCloud\Tagging\Model;

use App\PostCounter;
use App\User;
use TagsCloud\Tagging\Util;

class PostTagged extends Tagged
{
    protected $table = 'post_tagging_tagged';
    public $tagModel = '';

    public function __construct(array $attributes = array())
    {
        parent::__construct($attributes);
        $this->tagModel = '\TagsCloud\Tagging\Model\\' . (new User())
                ->getShortModelName() . 'Tag';
        $this->taggingUtility = new Util($this->tagModel);

    }

    /**
     * Get instance of tag linked to the tagged value
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tag()
    {
        return $this->belongsTo($this->tagModel, 'tag_slug', 'slug');
    }

}