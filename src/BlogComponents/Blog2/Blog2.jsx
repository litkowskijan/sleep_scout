import React, { useState } from 'react';
import firebaseConfig from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const Blog2 = () => {
    const categoryRef = firestore.collection('articles').orderBy('category');
    const articlesRef = firestore.collection('articles');
    const [category] = useCollection(categoryRef);
    const [articles] = useCollection(articlesRef);
    const [selectedCategory, setSelectedCategory] = useState('All categories');

    if (!category || !category.docs || !articles || !articles.docs) {
        return <div>Loading...</div>;
    }

    const uniqueCategories = [ 'All categories', ...new Set(category.docs.map((doc) => doc.data().category)),].sort();

    if (uniqueCategories.length === 0) {
        return <div>No categories available</div>;
    }

    uniqueCategories.sort((a, b) => {
        if (a === 'All categories') return -1;
        if (b === 'All categories') return 1;
        return a.localeCompare(b);
    });

    const articlesData = articles.docs.map((doc) => doc.data());

    const filteredArticles = selectedCategory === 'All categories'
        ? articlesData
        : articlesData.filter((article) => article.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='blog2__section'>
            <div className='blog2__container container'>
                <div className='blog__categories'>
                    {uniqueCategories.map((category) => (
                        <div
                        className='blog__category'
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        style={selectedCategory === category ? { fontWeight: '600' } : {}}>
                            {category}
                        </div>
                    ))}
                </div>
                <div className='blog__articles'>
                    <h2 className='blog__article__title'>Articles:</h2>
                    {filteredArticles.map((article) => (
                        <div className='blog__article__box'>
                            <img className='blog__article__img' src={article.imgUrl} alt='article img'></img>
                            <div key={article.id} className='blog__article'>{article.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog2;