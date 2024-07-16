function getMusicRecommendation() {
    var moodInput = document.getElementById('moodInput').value.trim().toLowerCase();
    var recommendations = document.getElementById('recommendations');
    var songs = {
        happy: ["Happy - Pharrell Williams", "Uptown Funk - Mark Ronson ft. Bruno Mars", "Can't Stop the Feeling - Justin Timberlake"],
        sad: ["Someone Like You - Adele", "Fix You - Coldplay", "Hurt - Johnny Cash"],
        energetic: ["Eye of the Tiger - Survivor", "Don't Stop Me Now - Queen", "Lose Yourself - Eminem"],
        relaxed: ["Weightless - Marconi Union", "Clair de Lune - Claude Debussy", "Sunset Lover - Petit Biscuit"]
    };

    if (songs[moodInput]) {
        recommendations.innerHTML = `<p>Recommended songs for a ${moodInput} mood:</p><ul>` + songs[moodInput].map(song => `<li>${song}</li>`).join('') + `</ul>`;
    } else {
        recommendations.innerHTML = "<p>Sorry, we don't have recommendations for that mood. Try 'happy', 'sad', 'energetic', or 'relaxed'.</p>";
    }
}
