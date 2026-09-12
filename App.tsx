import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BookGrid } from './components/BookGrid';
import { CategoryChips } from './components/CategoryChips';
import { FloatingCartButton } from './components/FloatingCartButton';
import { Header } from './components/Header';
import { BOOKS } from './data';

export default function App() {
  const [cartCount, setCartCount] = useState(3);

  const handlePressBook = (id: number) => {
  };

  const handlePressCart = () => {
  };

  return (
    <View style={styles.screen}>

      {/* 1. Header cố định trên cùng  */}
      <Header />

      {/* 2. ScrollView chứa Chips + Grid */}
      <ScrollView contentContainerStyle={styles.content}>
        <CategoryChips />
        <BookGrid books={BOOKS} onPressBook={handlePressBook} />
      </ScrollView>

      {/* 3. Nút giỏ hàng nổi */}
      <FloatingCartButton count={cartCount} onPress={handlePressCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },

  content: {
    padding: 16,
    paddingBottom: 100
  },
});
